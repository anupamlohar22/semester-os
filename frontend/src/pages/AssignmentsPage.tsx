import { useEffect, useState } from "react";

import { getAssignments } from "../services/assignmentService";
import type { Assignment } from "../types/assignment";

function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    getAssignments().then(setAssignments);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">Assignments</h1>

      <div className="mt-6 space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="rounded-xl bg-white p-4 shadow"
          >
            <h2 className="text-xl font-semibold">
              {assignment.title}
            </h2>

            <p>Status: {assignment.status}</p>
            <p>Progress: {assignment.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignmentsPage;