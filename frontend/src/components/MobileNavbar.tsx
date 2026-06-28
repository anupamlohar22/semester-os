import { Link } from "react-router-dom";

function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around border-t bg-white p-4 md:hidden">
      <Link to="/">🏠</Link>
      <Link to="/subjects">📚</Link>
      <Link to="/assignments">📝</Link>
      <Link to="/grades">📊</Link>
      <Link to="/attendance">✅</Link>
    </div>
  );
}

export default MobileNavbar;