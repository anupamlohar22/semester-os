function UpcomingCard() {
  return (
    <div className="mt-6 rounded-xl bg-white p-4 shadow">
      <h2 className="mb-3 text-xl font-semibold">Upcoming</h2>

      <div className="space-y-2">
        <div>📘 DBMS Assignment 1 — Tomorrow</div>
        <div>📝 DBMS Midterm — 15 Sep 2026</div>
        <div>📗 OS Assignment — Next Week</div>
      </div>
    </div>
  );
}

export default UpcomingCard;