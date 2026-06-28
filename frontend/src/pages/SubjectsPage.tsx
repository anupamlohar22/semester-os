import { useEffect, useState } from "react";

import { getSubjects } from "../services/subjectService";
import type { Subject } from "../types/subject";

function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    getSubjects().then(setSubjects);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">Subjects</h1>

      <div className="mt-6 space-y-4">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="rounded-xl bg-white p-4 shadow"
          >
            <h2 className="text-xl font-semibold">
              {subject.name}
            </h2>

            <p>Credits: {subject.credits}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectsPage;