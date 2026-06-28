import StatCard from "../components/StatCard";
import UpcomingCard from "../components/UpcomingCard";
import SemesterProgress from "../components/SemesterProgress";
import MobileNavbar from "../components/MobileNavbar";
import DesktopSidebar from "../components/DesktopSidebar";

function DashboardPage() {
  return (
    <div className="flex">
      <DesktopSidebar />

      <div className="min-h-screen flex-1 bg-gray-100 p-4 pb-24">
        <h1 className="text-3xl font-bold">SemesterOS</h1>

        <SemesterProgress />

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Assignments" value="4" />
          <StatCard title="Exams" value="2" />
          <StatCard title="Attendance" value="82%" />
          <StatCard title="GPA" value="8.4" />
        </div>

        <UpcomingCard />

        <MobileNavbar />
      </div>
    </div>
  );
}

export default DashboardPage;