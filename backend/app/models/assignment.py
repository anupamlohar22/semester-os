from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Assignment(Base):
    __tablename__ = "assignments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    subject_id: Mapped[int] = mapped_column(
        ForeignKey("subjects.id")
    )

    title: Mapped[str] = mapped_column(String(200))

    status: Mapped[str] = mapped_column(String(50))

    progress: Mapped[int] = mapped_column(Integer)