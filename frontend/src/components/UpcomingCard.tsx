import SectionCard from "./SectionCard";

function UpcomingCard() {
  return (
    <SectionCard title="Upcoming">
      <div className="space-y-2">
        <div>📘 DBMS Assignment 1 — Tomorrow</div>
        <div>📝 DBMS Midterm — 15 Sep 2026</div>
        <div>📗 OS Assignment — Next Week</div>
      </div>
    </SectionCard>
  );
}

export default UpcomingCard;