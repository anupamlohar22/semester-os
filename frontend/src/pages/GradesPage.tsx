import { useEffect, useState } from "react";
import ErrorState from "../components/ErrorState";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import PageLayout from "../components/PageLayout";
import { getGrades } from "../services/gradeService";
import type { Grade } from "../types/grade";

function GradesPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  getGrades()
    .then((data) => {
      setGrades(data);
    })
    .catch(() => {
      setError("Failed to load grades.");
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  return (
    <PageLayout title="Grades">
      <div className="mt-6 space-y-4">
{loading ? (
  <LoadingSpinner />
) : error ? (
  <ErrorState message={error} />
) : grades.length === 0 ? (
  <LoadingSpinner />
) : grades.length === 0 ? (
    <EmptyState message="No grades found." />
  ) : (
    grades.map((grade) => (
      <div
        key={grade.id}
        className="rounded-xl bg-white p-4 shadow"
      >
        <h2 className="text-xl font-semibold">
          {grade.category}
        </h2>

        <p>
          {grade.score} / {grade.max_score}
        </p>
      </div>
    ))
  )}
</div>
    </PageLayout>
  );
}

export default GradesPage;