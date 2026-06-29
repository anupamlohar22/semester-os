import { useEffect, useState } from "react";
import ErrorState from "../components/ErrorState";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import PageLayout from "../components/PageLayout";
import { getExams } from "../services/examService";
import type { Exam } from "../types/exam";

function ExamsPage() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  getExams()
    .then((data) => {
      setExams(data);
    })
    .catch(() => {
      setError("Failed to load exams.");
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  return (
    <PageLayout title="Exams">
      <div className="mt-6 space-y-4">
  {loading ? (
  <LoadingSpinner />
) : error ? (
  <ErrorState message={error} />
) : exams.length === 0 ? (
  <LoadingSpinner />
) : exams.length === 0 ? (
    <EmptyState message="No exams found." />
  ) : (
    exams.map((exam) => (
      <div
        key={exam.id}
        className="rounded-xl bg-white p-4 shadow"
      >
        <h2 className="text-xl font-semibold">
          {exam.title}
        </h2>

        <p>Date: {exam.date}</p>
        <p>Weightage: {exam.weightage}%</p>
      </div>
    ))
  )}
</div>
    </PageLayout>
  );
}

export default ExamsPage;