from pydantic import BaseModel


class AssignmentCreate(BaseModel):
    subject_id: int
    title: str
    status: str
    progress: int


class AssignmentResponse(BaseModel):
    id: int
    subject_id: int
    title: str
    status: str
    progress: int

    model_config = {
        "from_attributes": True
    }