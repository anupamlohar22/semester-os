import { useEffect, useState } from "react";

import EmptyState from "../components/EmptyState";
import PageLayout from "../components/PageLayout";
import { getSemesters } from "../services/semesterService";
import type { Semester } from "../types/semester";

function SemestersPage() {
  const [semesters, setSemesters] = useState<Semester[]>([]);

  useEffect(() => {
    getSemesters().then(setSemesters);
  }, []);

  return (
    <PageLayout title="Semesters">
<div className="mt-6 space-y-4">
  {semesters.length === 0 ? (
    <EmptyState message="No semesters found." />
  ) : (
    semesters.map((semester) => (
      <div
        key={semester.id}
        className="rounded-xl bg-white p-4 shadow"
      >
        <h2 className="text-xl font-semibold">
          {semester.name}
        </h2>
      </div>
    ))
  )}
</div>
    </PageLayout>
  );
}

export default SemestersPage;