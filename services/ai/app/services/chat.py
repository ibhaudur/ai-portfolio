from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama import ChatOllama

from app.config import settings
from app.services.vector_store import get_vector_store


def get_llm():
    return ChatOllama(
        model=settings.llm_model,
        base_url=settings.ollama_base_url,
        temperature=0,
    )


PROMPT = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are an AI assistant for Ibhaudur Rahman's portfolio.

Answer questions using ONLY the portfolio context provided below.

If the answer is not available in the context, say:
"I don't have that information in my portfolio."

Do not invent or assume information.

Keep answers concise, professional and friendly.

Portfolio context:
{context}
""",
        ),
        (
            "human",
            "{question}",
        ),
    ]
)


def chat(question: str) -> str:
    vector_store = get_vector_store()

    queries = [question]

    question_lower = question.lower()

    if "education" in question_lower:
        queries.append(
            "Ibhaudur Rahman's education degree college university"
        )

    if "work experience" in question_lower or "experience" in question_lower:
        queries.append(
            "Ibhaudur Rahman's work experience companies career"
        )

    documents = []

    for query in queries:
        results = vector_store.similarity_search(
            query,
            k=4,
        )

        documents.extend(results)

    # Remove duplicate chunks
    unique_documents = []
    seen = set()

    for document in documents:
        key = (
            document.metadata.get("source"),
            document.page_content,
        )

        if key not in seen:
            seen.add(key)
            unique_documents.append(document)

    print("\n--- Retrieved Documents ---")

    for i, document in enumerate(unique_documents, 1):
        print(
            f"\n[{i}] Source: "
            f"{document.metadata.get('source')}"
        )
        print(document.page_content[:500])

    context = "\n\n".join(
        document.page_content
        for document in unique_documents
    )

    prompt = PROMPT.format_messages(
        context=context,
        question=question,
    )

    llm = get_llm()

    response = llm.invoke(prompt)

    return response.content