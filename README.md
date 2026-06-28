# SemesterOS

A full-stack semester planning system for college students.

## Features

* Semester management
* Subject tracking
* Assignment tracking
* Exam management
* Grade management
* Attendance tracking
* Mobile-responsive dashboard
* FastAPI backend
* React + TypeScript frontend

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* FastAPI
* SQLAlchemy
* SQLite
* JWT Authentication
* Pydantic

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Run Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
