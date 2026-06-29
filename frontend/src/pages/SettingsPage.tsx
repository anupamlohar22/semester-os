import PageLayout from "../components/PageLayout";
import ComingSoonCard from "../components/ComingSoonCard";

function SettingsPage() {
  return (
    <PageLayout title="Settings">
      <ComingSoonCard feature="User Settings & Preferences" />
    </PageLayout>
  );
}

export default SettingsPage;