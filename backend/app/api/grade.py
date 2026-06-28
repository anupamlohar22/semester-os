from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.models.grade import Grade
from app.schemas.grade import GradeCreate, GradeResponse

router = APIRouter(prefix="/grades", tags=["Grades"])


@router.post("/", response_model=GradeResponse)
def create_grade(
    data: GradeCreate,
    db: Session = Depends(get_db),
):
    grade = Grade(
        subject_id=data.subject_id,
        category=data.category,
        score=data.score,
        max_score=data.max_score,
    )

    db.add(grade)
    db.commit()
    db.refresh(grade)

    return grade

@router.get("/", response_model=list[GradeResponse])
def get_grades(db: Session = Depends(get_db)):
    return db.query(Grade).all()