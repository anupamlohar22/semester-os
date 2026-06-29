import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import PageLayout from "../components/PageLayout";
import { getAssignments } from "../services/assignmentService";
import type { Assignment } from "../types/assignment";

function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  getAssignments().then((data) => {
    setAssignments(data);
    setLoading(false);
  });
}, []);

  return (
    <PageLayout title="Assignments">
     <div className="mt-6 space-y-4">
  {loading ? (
  <LoadingSpinner />
) : assignments.length === 0 ? (
    <EmptyState message="No assignments found." />
  ) : (
    assignments.map((assignment) => (
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
    ))
  )}
</div>
    </PageLayout>
  );
}

export default AssignmentsPage;