from pydantic import BaseModel


class ExamCreate(BaseModel):
    subject_id: int
    title: str
    date: str
    weightage: int


class ExamResponse(BaseModel):
    id: int
    subject_id: int
    title: str
    date: str
    weightage: int

    model_config = {
        "from_attributes": True
    }