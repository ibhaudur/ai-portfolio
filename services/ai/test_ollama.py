from langchain_ollama import ChatOllama


llm = ChatOllama(
    model="qwen3:4b",
    base_url="http://host.docker.internal:11434",
    temperature=0,
)

response = llm.invoke(
    "Explain RAG in AI in three simple sentences."
)

print(response.content)