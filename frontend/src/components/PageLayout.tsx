import type { ReactNode } from "react";
import Topbar from "./Topbar";
import PageHeader from "./PageHeader";
import DesktopSidebar from "./DesktopSidebar";
import MobileNavbar from "./MobileNavbar";

type Props = {
  title: string;
  children: ReactNode;
};

function PageLayout({ title, children }: Props) {
  return (
    <div className="flex">
      <DesktopSidebar />

    <div className="min-h-screen flex-1 bg-gray-100 p-4 pb-24 dark:bg-gray-900">
        <Topbar />

<PageHeader title={title} />

{children}
        <MobileNavbar />
      </div>
    </div>
  );
}

export default PageLayout;