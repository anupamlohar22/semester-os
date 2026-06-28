from sqlalchemy import ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Attendance(Base):
    __tablename__ = "attendance"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    subject_id: Mapped[int] = mapped_column(
        ForeignKey("subjects.id")
    )

    attended_classes: Mapped[int] = mapped_column(Integer)

    total_classes: Mapped[int] = mapped_column(Integer)