from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.models.assignment import Assignment
from app.schemas.assignment import AssignmentCreate, AssignmentResponse

router = APIRouter(prefix="/assignments", tags=["Assignments"])


@router.post("/", response_model=AssignmentResponse)
def create_assignment(
    data: AssignmentCreate,
    db: Session = Depends(get_db),
):
    assignment = Assignment(
        subject_id=data.subject_id,
        title=data.title,
        status=data.status,
        progress=data.progress,
    )

    db.add(assignment)
    db.commit()
    db.refresh(assignment)

    return assignment

@router.get("/", response_model=list[AssignmentResponse])
def get_assignments(db: Session = Depends(get_db)):
    return db.query(Assignment).all()