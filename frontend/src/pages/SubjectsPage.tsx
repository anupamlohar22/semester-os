import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import PageLayout from "../components/PageLayout";
import { getSubjects } from "../services/subjectService";
import type { Subject } from "../types/subject";

function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  getSubjects().then((data) => {
    setSubjects(data);
    setLoading(false);
  });
}, []);
  return (
    <PageLayout title="Subjects">
      <div className="mt-6 space-y-4">
 {loading ? (
  <LoadingSpinner />
) : subjects.length === 0 ? (
    <EmptyState message="No subjects found." />
  ) : (
    subjects.map((subject) => (
      <div
        key={subject.id}
        className="rounded-xl bg-white p-4 shadow"
      >
        <h2 className="text-xl font-semibold">
          {subject.name}
        </h2>

        <p>Credits: {subject.credits}</p>
      </div>
    ))
  )}
</div>
    </PageLayout>
  );
}

export default SubjectsPage;