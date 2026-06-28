import { Link, useLocation } from "react-router-dom";

function DesktopSidebar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/subjects", label: "Subjects" },
    { to: "/assignments", label: "Assignments" },
    { to: "/exams", label: "Exams" },
    { to: "/grades", label: "Grades" },
    { to: "/attendance", label: "Attendance" },
  ];

  return (
    <div className="hidden h-screen w-64 border-r bg-white p-6 md:block">
      <h1 className="mb-8 text-2xl font-bold">SemesterOS</h1>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`block rounded-lg px-3 py-2 ${
              pathname === link.to
                ? "bg-blue-100 font-semibold"
                : "hover:bg-gray-100"
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