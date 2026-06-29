type Props = {
  message: string;
};

function EmptyState({ message }: Props) {
  return (
    <div className="rounded-xl bg-white p-8 text-center shadow dark:bg-gray-800">
      <p className="text-gray-500 dark:text-gray-400">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;