type Props = {
  message: string;
};

function EmptyState({ message }: Props) {
  return (
    <div className="rounded-xl bg-white p-8 text-center shadow">
      <p className="text-gray-500">{message}</p>
    </div>
  );
}

export default EmptyState;