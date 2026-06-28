import { Link, useLocation } from "react-router-dom";

function MobileNavbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", icon: "🏠" },
    { to: "/semesters", icon: "🗓️" },
    { to: "/subjects", icon: "📚" },
    { to: "/assignments", icon: "📝" },
    { to: "/grades", icon: "📊" },
    { to: "/attendance", icon: "✅" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around border-t bg-white p-4 md:hidden">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={pathname === link.to ? "scale-110" : ""}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}

export default MobileNavbar;