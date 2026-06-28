import type { ReactNode } from "react";

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

      <div className="min-h-screen flex-1 bg-gray-100 p-4 pb-24">
        <h1 className="text-3xl font-bold">{title}</h1>

        {children}

        <MobileNavbar />
      </div>
    </div>
  );
}

export default PageLayout;