import { useEffect, useState } from "react";

import EmptyState from "../components/EmptyState";
import PageLayout from "../components/PageLayout";
import {
  createSemester,
  getSemesters,
} from "../services/semesterService";
import type { Semester } from "../types/semester";

function SemestersPage() {
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [name, setName] = useState("");
  const [creating, setCreating] = useState(false);
  useEffect(() => {
    getSemesters().then(setSemesters);
  }, []);
  async function handleCreateSemester() {
  if (!name.trim()) {
    return;
  }

  try {
    setCreating(true);

    const newSemester = await createSemester({
      user_id: 1,
      name,
    });

    setSemesters((prev) => [...prev, newSemester]);
    setName("");
  } finally {
    setCreating(false);
  }
}

  return (
    <PageLayout title="Semesters">
      <div className="mt-6 rounded-xl bg-white p-4 shadow dark:bg-gray-800">
  <h2 className="mb-4 text-xl font-semibold dark:text-white">
    Add Semester
  </h2>

  <div className="flex gap-3">
    <input
      type="text"
      placeholder="Semester name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="flex-1 rounded-lg border p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
    />

    <button
      onClick={handleCreateSemester}
      disabled={creating}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
    >
      {creating ? "Adding..." : "Add"}
    </button>
  </div>
</div>
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