from sqlalchemy import ForeignKey, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Grade(Base):
    __tablename__ = "grades"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    subject_id: Mapped[int] = mapped_column(
        ForeignKey("subjects.id")
    )

    category: Mapped[str] = mapped_column(String(50))

    score: Mapped[float] = mapped_column(Float)

    max_score: Mapped[float] = mapped_column(Float)