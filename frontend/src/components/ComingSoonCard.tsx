type Props = {
  feature: string;
};

function ComingSoonCard({ feature }: Props) {
  return (
    <div className="mt-6 rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 text-center">
      <h2 className="text-xl font-semibold">
        {feature}
      </h2>

      <p className="mt-2 text-gray-500">
        Coming in the next iteration.
      </p>
    </div>
  );
}

export default ComingSoonCard;