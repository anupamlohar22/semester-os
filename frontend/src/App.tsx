import { BrowserRouter, Routes, Route } from "react-router-dom";

import CalendarPage from "./pages/CalendarPage";
import AttendancePage from "./pages/AttendancePage";
import GradesPage from "./pages/GradesPage";
import ExamsPage from "./pages/ExamsPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import DashboardPage from "./pages/DashboardPage";
import SubjectsPage from "./pages/SubjectsPage";
import SemestersPage from "./pages/SemestersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/semesters" element={<SemestersPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;