type Props = {
  feature: string;
};

function ComingSoonCard({ feature }: Props) {
  return (
    <div className="mt-6 rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 text-center shadow dark:border-gray-600 dark:bg-gray-800">
      <h2 className="text-xl font-semibold dark:text-white">
        {feature}
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Coming in the next iteration.
      </p>
    </div>
  );
}

export default ComingSoonCard;