import PageLayout from "../components/PageLayout";
import StatCard from "../components/StatCard";
import UpcomingCard from "../components/UpcomingCard";
import SemesterProgress from "../components/SemesterProgress";
import FeatureBanner from "../components/FeatureBanner";

function DashboardPage() {
  return (
    <PageLayout title="SemesterOS">
      <FeatureBanner />
      <SemesterProgress />

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Assignments" value="4" />
        <StatCard title="Exams" value="2" />
        <StatCard title="Attendance" value="82%" />
        <StatCard title="GPA" value="8.4" />
      </div>

      <UpcomingCard />
    </PageLayout>
  );
}

export default DashboardPage;