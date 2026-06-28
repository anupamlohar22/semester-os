import SectionCard from "./SectionCard";

function SemesterProgress() {
  return (
    <SectionCard title="Semester Progress">
      <div className="mb-2 flex items-center justify-between">
        <span>Current Progress</span>
        <span>62%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div className="h-3 w-[62%] rounded-full bg-blue-600" />
      </div>
    </SectionCard>
  );
}

export default SemesterProgress;