from __future__ import annotations

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import Mapped

from app.core.db import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = Column(Integer, primary_key=True, index=True)
    email: Mapped[str] = Column(String, unique=True, nullable=False, index=True)
    first_name: Mapped[str] = Column(String, nullable=False)
    last_name: Mapped[str] = Column(String, nullable=True)
