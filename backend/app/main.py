from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.models.user import User
from fastapi.middleware.cors import CORSMiddleware
from app.api.attendance import router as attendance_router
from app.models.attendance import Attendance
from app.api.grade import router as grade_router
from app.models.grade import Grade
from app.api.exam import router as exam_router
from app.models.exam import Exam
from app.api.assignment import router as assignment_router
from app.models.assignment import Assignment
from app.api.subject import router as subject_router
from app.models.subject import Subject
from app.database import Base, engine
from app.models.user import User
from app.models.semester import Semester
from app.api.user import router as user_router
from app.api.semester import router as semester_router

app = FastAPI(title="SemesterOS API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(user_router)
app.include_router(semester_router)
app.include_router(subject_router)
app.include_router(assignment_router)
app.include_router(exam_router)
app.include_router(grade_router)
app.include_router(attendance_router)
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "SemesterOS API is running"}