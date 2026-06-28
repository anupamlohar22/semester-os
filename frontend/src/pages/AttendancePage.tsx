import { useEffect, useState } from "react";

import { getAttendance } from "../services/attendanceService";
import type { Attendance } from "../types/attendance";

function AttendancePage() {
  const [attendance, setAttendance] = useState<Attendance[]>([]);

  useEffect(() => {
    getAttendance().then(setAttendance);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">Attendance</h1>

      <div className="mt-6 space-y-4">
        {attendance.map((item) => (
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
        ))}
      </div>
    </div>
  );
}

export default AttendancePage;