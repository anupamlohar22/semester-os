type Props = {
  title: string;
  value: string;
};

function StatCard({ title, value }: Props) {
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default StatCard;