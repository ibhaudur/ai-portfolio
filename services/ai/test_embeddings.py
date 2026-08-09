from langchain_ollama import OllamaEmbeddings


embeddings = OllamaEmbeddings(
    model="qwen3-embedding:0.6b",
    base_url="http://host.docker.internal:11434",
)

vector = embeddings.embed_query(
    "I am a full stack developer working with React, Next.js and Node.js."
)

print("Embedding dimensions:", len(vector))
print("First 10 values:", vector[:10])