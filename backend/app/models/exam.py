from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Exam(Base):
    __tablename__ = "exams"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    subject_id: Mapped[int] = mapped_column(
        ForeignKey("subjects.id")
    )

    title: Mapped[str] = mapped_column(String(200))

    date: Mapped[str] = mapped_column(String(50))

    weightage: Mapped[int] = mapped_column(Integer)