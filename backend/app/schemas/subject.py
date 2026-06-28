from pydantic import BaseModel


class SubjectCreate(BaseModel):
    semester_id: int
    name: str
    credits: int


class SubjectResponse(BaseModel):
    id: int
    semester_id: int
    name: str
    credits: int

    model_config = {
        "from_attributes": True
    }