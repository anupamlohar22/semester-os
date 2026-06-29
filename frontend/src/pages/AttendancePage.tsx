import { useEffect, useState } from "react";

import EmptyState from "../components/EmptyState";
import PageLayout from "../components/PageLayout";
import { getAttendance } from "../services/attendanceService";
import type { Attendance } from "../types/attendance";

function AttendancePage() {
  const [attendance, setAttendance] = useState<Attendance[]>([]);

  useEffect(() => {
    getAttendance().then(setAttendance);
  }, []);

  return (
    <PageLayout title="Attendance">
<div className="mt-6 space-y-4">
  {attendance.length === 0 ? (
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