from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat import chat


router = APIRouter()


@router.post(
    "",
    response_model=ChatResponse,
)
def chat_endpoint(request: ChatRequest):
    answer = chat(request.question)

    return ChatResponse(answer=answer)