from sqlalchemy.orm import Session

from app.repositories.user_repository import UserRepository
from app.schemas.user import UserCreateSchema, UserResponseSchema


class UserService:
    def __init__(self, session: Session) -> None:
        self.repository = UserRepository(session=session)

    def add_user(self, payload: UserCreateSchema) -> UserResponseSchema:
        created_user = self.repository.create_user(user_data=payload.dict())
        return UserResponseSchema.from_orm(created_user)
