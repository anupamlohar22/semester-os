import { useEffect, useState } from "react";

import { getGrades } from "../services/gradeService";
import type { Grade } from "../types/grade";

function GradesPage() {
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    getGrades().then(setGrades);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">Grades</h1>

      <div className="mt-6 space-y-4">
        {grades.map((grade) => (
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
        ))}
      </div>
    </div>
  );
}

export default GradesPage;