from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.schemas.user import UserCreateSchema, UserResponseSchema
from app.services.user_service import UserService

router = APIRouter(prefix="/users", tags=["users"])


@router.post("/", response_model=UserResponseSchema)
def create_user(
    payload: UserCreateSchema,
    db: Session = Depends(get_db),
) -> UserResponseSchema:
    try:
        service = UserService(session=db)
        return service.add_user(payload)
    except Exception as exc:
        raise HTTPException(status_code=400, detail=str(exc))
