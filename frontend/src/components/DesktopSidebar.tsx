import { Link } from "react-router-dom";

function DesktopSidebar() {
  return (
    <div className="hidden h-screen w-64 border-r bg-white p-6 md:block">
      <h1 className="mb-8 text-2xl font-bold">
        SemesterOS
      </h1>

      <nav className="space-y-4">
        <Link className="block" to="/">
          Dashboard
        </Link>

        <Link className="block" to="/subjects">
          Subjects
        </Link>

        <Link className="block" to="/assignments">
          Assignments
        </Link>

        <Link className="block" to="/exams">
          Exams
        </Link>

        <Link className="block" to="/grades">
          Grades
        </Link>

        <Link className="block" to="/attendance">
          Attendance
        </Link>
      </nav>
    </div>
  );
}

export default DesktopSidebar;