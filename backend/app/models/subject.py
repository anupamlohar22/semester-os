from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Subject(Base):
    __tablename__ = "subjects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    semester_id: Mapped[int] = mapped_column(
        ForeignKey("semesters.id")
    )

    name: Mapped[str] = mapped_column(String(100))

    credits: Mapped[int] = mapped_column(Integer)