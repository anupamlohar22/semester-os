function QuickActions() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <button className="rounded-xl bg-blue-600 p-4 text-white shadow">
        + Add Assignment
      </button>

      <button className="rounded-xl bg-green-600 p-4 text-white shadow">
        + Add Exam
      </button>

      <button className="rounded-xl bg-purple-600 p-4 text-white shadow">
        + Add Grade
      </button>
    </div>
  );
}

export default QuickActions;