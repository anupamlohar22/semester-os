import { Link, useLocation } from "react-router-dom";

function DesktopSidebar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/semesters", label: "Semesters" },
    { to: "/subjects", label: "Subjects" },
    { to: "/assignments", label: "Assignments" },
    { to: "/exams", label: "Exams" },
    { to: "/grades", label: "Grades" },
    { to: "/attendance", label: "Attendance" },
    { to: "/calendar", label: "Calendar" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <div className="hidden h-screen w-64 border-r bg-white p-6 dark:border-gray-700 dark:bg-gray-800 md:block">
      <h1 className="mb-8 text-2xl font-bold dark:text-white">
  SemesterOS
</h1>

      <nav className="space-y-2 dark:text-white">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`block rounded-lg px-3 py-2 transition-colors ${
  pathname === link.to
    ? "bg-blue-100 font-semibold dark:bg-blue-900"
    : "hover:bg-gray-100 dark:hover:bg-gray-700"
}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default DesktopSidebar;