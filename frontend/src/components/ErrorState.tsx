type Props = {
  message: string;
};

function ErrorState({ message }: Props) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900 dark:bg-red-950">
      <p className="text-red-600 dark:text-red-300">
        {message}
      </p>
    </div>
  );
}

export default ErrorState;