from app.services.chat import chat


questions = [
    "What frontend technologies does Ibhaudur know?",
    "What Python and AI technologies is he working with?",
    "What databases does he use?",
    "What projects has he worked on?",
    "What is his favorite programming language?",
]


for question in questions:
    print("\n" + "=" * 70)
    print("QUESTION:", question)
    print("=" * 70)

    answer = chat(question)

    print("\nANSWER:")
    print(answer)