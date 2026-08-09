from langchain_postgres import PGVector

from app.config import settings
from app.services.embeddings import get_embeddings


COLLECTION_NAME = "portfolio_documents"


def get_vector_store() -> PGVector:
    return PGVector(
        embeddings=get_embeddings(),
        collection_name=COLLECTION_NAME,
        connection=settings.database_url,
        use_jsonb=True,
    )