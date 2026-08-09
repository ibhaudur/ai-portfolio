from pathlib import Path

from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

from app.services.vector_store import get_vector_store


DATA_DIR = Path(__file__).parent / "data" / "portfolio"


def load_markdown_documents() -> list[Document]:
    documents = []

    for file_path in DATA_DIR.glob("*.md"):
        content = file_path.read_text(encoding="utf-8")

        documents.append(
            Document(
                page_content=content,
                metadata={
                    "source": file_path.name,
                    "type": "portfolio",
                },
            )
        )

    return documents


def ingest_documents():
    documents = load_markdown_documents()

    if not documents:
        print("No Markdown documents found.")
        return

    print(f"Loaded {len(documents)} documents.")

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=100,
    )

    chunks = splitter.split_documents(documents)

    print(f"Created {len(chunks)} chunks.")

    vector_store = get_vector_store()

    # Remove the existing portfolio collection
    print("Deleting existing vector collection...")
    vector_store.delete_collection()

    # Create a fresh vector store
    vector_store = get_vector_store()

    ids = vector_store.add_documents(chunks)

    print(f"Inserted {len(ids)} vectors into PostgreSQL.")
    print("Ingestion completed successfully.")


if __name__ == "__main__":
    ingest_documents()