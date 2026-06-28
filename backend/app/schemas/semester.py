from pydantic import BaseModel


class SemesterCreate(BaseModel):
    name: str


class SemesterResponse(BaseModel):
    id: int
    user_id: int
    name: str

    model_config = {
        "from_attributes": True
    }