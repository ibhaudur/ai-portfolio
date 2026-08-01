from pydantic import BaseModel, EmailStr


class UserCreateSchema(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str | None = None


class UserResponseSchema(BaseModel):
    id: int
    email: EmailStr
    first_name: str
    last_name: str | None = None

    model_config = {
        "from_attributes": True,
    }
