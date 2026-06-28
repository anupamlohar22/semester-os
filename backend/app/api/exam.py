from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.models.exam import Exam
from app.schemas.exam import ExamCreate, ExamResponse

router = APIRouter(prefix="/exams", tags=["Exams"])


@router.post("/", response_model=ExamResponse)
def create_exam(
    data: ExamCreate,
    db: Session = Depends(get_db),
):
    exam = Exam(
        subject_id=data.subject_id,
        title=data.title,
        date=data.date,
        weightage=data.weightage,
    )

    db.add(exam)
    db.commit()
    db.refresh(exam)

    return exam

@router.get("/", response_model=list[ExamResponse])
def get_exams(db: Session = Depends(get_db)):
    return db.query(Exam).all()