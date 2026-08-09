from fastapi import APIRouter

from app.api.v1.endpoints.users import router as users_router
from app.api.v1.endpoints.chat import router as chat_router


api_router = APIRouter()

api_router.include_router(users_router)

api_router.include_router(
    chat_router,
    prefix="/chat",
    tags=["Chat"],
)