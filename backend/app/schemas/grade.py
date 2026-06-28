from pydantic import BaseModel


class GradeCreate(BaseModel):
    subject_id: int
    category: str
    score: float
    max_score: float


class GradeResponse(BaseModel):
    id: int
    subject_id: int
    category: str
    score: float
    max_score: float

    model_config = {
        "from_attributes": True
    }