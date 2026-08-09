# Python and AI

Ibhaudur is expanding his development expertise into
Artificial Intelligence and Generative AI.

## Python

Python is being used for AI backend development and experimentation.

## FastAPI

FastAPI is used to build AI-related APIs and services.

## LangChain

LangChain is used for:

- LLM integration
- Prompt management
- Retrieval-Augmented Generation
- Document retrieval
- Vector store integration

## RAG

He is building a Retrieval-Augmented Generation system for his
portfolio chatbot.

The system retrieves relevant portfolio information from a
PostgreSQL database using pgvector before passing the information
to an LLM.

## LLM

The portfolio chatbot currently uses:

- Qwen3 4B

through Ollama for local LLM inference.

## Embeddings

The project uses:

- Qwen3 Embedding 0.6B

to convert text into 1024-dimensional vectors.

## Vector Database

PostgreSQL with pgvector is used to store and retrieve document
embeddings.

## Current AI Architecture

User question
→ Embedding model
→ pgvector similarity search
→ Relevant portfolio information
→ Qwen3 LLM
→ Final answer