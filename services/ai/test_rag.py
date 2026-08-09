from app.services.vector_store import get_vector_store


vector_store = get_vector_store()


documents = [
    """
    Profile:
    Ibhaudur Rahman is a Full Stack Developer with around 4+ years
    of experience in software development.
    """,

    """
    Frontend Skills:
    Ibhaudur works with React.js, Next.js, Redux, Redux Toolkit,
    Tailwind CSS and Material UI.
    """,

    """
    Backend Skills:
    Ibhaudur works with Node.js, Express.js, REST APIs,
    PostgreSQL and MongoDB.
    """,

    """
    Python and AI Skills:
    Ibhaudur is learning and working with Python, FastAPI,
    LangChain, RAG, LLMs, vector databases and Generative AI.
    """,

    """
    DevOps Skills:
    Ibhaudur works with Docker, AWS, GitHub Actions and CI/CD.
    """,

    """
    Database Skills:
    Ibhaudur works with PostgreSQL, pgvector, MongoDB and MySQL.
    """,
]


metadatas = [
    {"category": "profile"},
    {"category": "frontend"},
    {"category": "backend"},
    {"category": "python_ai"},
    {"category": "devops"},
    {"category": "database"},
]


ids = vector_store.add_texts(
    texts=documents,
    metadatas=metadatas,
)

print("Documents added successfully.")
print("IDs:", ids)