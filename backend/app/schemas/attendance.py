from pydantic import BaseModel


class AttendanceCreate(BaseModel):
    subject_id: int
    attended_classes: int
    total_classes: int


class AttendanceResponse(BaseModel):
    id: int
    subject_id: int
    attended_classes: int
    total_classes: int

    model_config = {
        "from_attributes": True
    }