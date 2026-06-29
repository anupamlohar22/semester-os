type Props = {
  message: string;
};

function ErrorState({ message }: Props) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
      <p className="text-red-600">{message}</p>
    </div>
  );
}

export default ErrorState;