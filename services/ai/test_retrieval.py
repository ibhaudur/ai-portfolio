from app.services.vector_store import get_vector_store


def main():
    vector_store = get_vector_store()

    questions = [
        "What frontend technologies does he know?",
        "What Python and AI technologies does he know?",
        "What databases does he use?",
        "What projects has he worked on?",
    ]

    for question in questions:
        print("\n" + "=" * 60)
        print(f"QUESTION: {question}")
        print("=" * 60)

        results = vector_store.similarity_search(
            question,
            k=2,
        )

        for index, document in enumerate(results, start=1):
            print(f"\n--- Result {index} ---")
            print("Source:", document.metadata.get("source"))
            print(document.page_content)


if __name__ == "__main__":
    main()