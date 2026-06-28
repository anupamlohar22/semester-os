function SemesterProgress() {
  return (
    <div className="mt-6 rounded-xl bg-white p-4 shadow">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Semester Progress</h2>
        <span>62%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div className="h-3 w-[62%] rounded-full bg-blue-600" />
      </div>
    </div>
  );
}

export default SemesterProgress;