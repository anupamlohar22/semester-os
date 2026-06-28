import { useEffect, useState } from "react";

import PageLayout from "../components/PageLayout";
import { getExams } from "../services/examService";
import type { Exam } from "../types/exam";

function ExamsPage() {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    getExams().then(setExams);
  }, []);

  return (
    <PageLayout title="Exams">
      <div className="mt-6 space-y-4">
        {exams.map((exam) => (
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
        ))}
      </div>
    </PageLayout>
  );
}

export default ExamsPage;