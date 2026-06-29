type Props = {
  title: string;
  value: string;
};

function StatCard({ title, value }: Props) {
  return (
    <div className="rounded-xl bg-white p-4 shadow dark:bg-gray-800">
  <h2 className="text-sm text-gray-500 dark:text-gray-400">
    {title}
  </h2>

  <p className="text-2xl font-bold dark:text-white">
    {value}
  </p>
</div>
  );
}

export default StatCard;