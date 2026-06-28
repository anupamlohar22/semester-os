from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.models.semester import Semester
from app.schemas.semester import SemesterCreate, SemesterResponse

router = APIRouter(prefix="/semesters", tags=["Semesters"])


@router.post("/", response_model=SemesterResponse)
def create_semester(
    data: SemesterCreate,
    db: Session = Depends(get_db),
):
    semester = Semester(
        user_id=1,
        name=data.name,
    )

    db.add(semester)
    db.commit()
    db.refresh(semester)

    return semester

@router.get("/", response_model=list[SemesterResponse])
def get_semesters(db: Session = Depends(get_db)):
    return db.query(Semester).all()