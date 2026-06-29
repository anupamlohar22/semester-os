import { useEffect, useState } from "react";
import ErrorState from "../components/ErrorState";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import PageLayout from "../components/PageLayout";
import { getAttendance } from "../services/attendanceService";
import type { Attendance } from "../types/attendance";

function AttendancePage() {
  const [attendance, setAttendance] = useState<Attendance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {
  getAttendance()
    .then((data) => {
      setAttendance(data);
    })
    .catch(() => {
      setError("Failed to load attendance.");
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  return (
    <PageLayout title="Attendance">
<div className="mt-6 space-y-4">
  {loading ? (
  <LoadingSpinner />
) : error ? (
  <ErrorState message={error} />
) : attendance.length === 0 ? (
  <LoadingSpinner />
) : attendance.length === 0 ? (
    <EmptyState message="No attendance records found." />
  ) : (
    attendance.map((item) => (
      <div
        key={item.id}
        className="rounded-xl bg-white p-4 shadow"
      >
        <p>
          {item.attended_classes} / {item.total_classes} classes attended
        </p>

        <p>
          {(
            (item.attended_classes / item.total_classes) *
            100
          ).toFixed(1)}
          %
        </p>
      </div>
    ))
  )}
</div>
    </PageLayout>
  );
}

export default AttendancePage;