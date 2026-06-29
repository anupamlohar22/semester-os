import ThemeToggle from "./ThemeToggle";

function Topbar() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Welcome back
        </p>

        <h2 className="text-xl font-semibold dark:text-white">
          Track your semester
        </h2>
      </div>

      <div className="flex items-center gap-3">
  <ThemeToggle />

  <div className="rounded-full bg-white px-4 py-2 shadow dark:bg-gray-800 dark:text-white">
    👤 Student
  </div>
</div>
    </div>
  );
}

export default Topbar;