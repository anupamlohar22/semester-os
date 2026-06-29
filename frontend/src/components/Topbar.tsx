function Topbar() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">
          Welcome back
        </p>

        <h2 className="text-xl font-semibold">
          Track your semester
        </h2>
      </div>

      <div className="rounded-full bg-white px-4 py-2 shadow">
        👤 Student
      </div>
    </div>
  );
}

export default Topbar;