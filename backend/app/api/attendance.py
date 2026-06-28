from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.models.attendance import Attendance
from app.schemas.attendance import (
    AttendanceCreate,
    AttendanceResponse,
)

router = APIRouter(
    prefix="/attendance",
    tags=["Attendance"],
)


@router.post("/", response_model=AttendanceResponse)
def create_attendance(
    data: AttendanceCreate,
    db: Session = Depends(get_db),
):
    attendance = Attendance(
        subject_id=data.subject_id,
        attended_classes=data.attended_classes,
        total_classes=data.total_classes,
    )

    db.add(attendance)
    db.commit()
    db.refresh(attendance)

    return attendance

@router.get("/", response_model=list[AttendanceResponse])
def get_attendance(db: Session = Depends(get_db)):
    return db.query(Attendance).all()