import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

function SectionCard({ title, children }: Props) {
  return (
    <div className="mt-6 rounded-xl bg-white p-4 shadow">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>

      {children}
    </div>
  );
}

export default SectionCard;