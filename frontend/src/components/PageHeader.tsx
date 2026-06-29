type Props = {
  title: string;
  subtitle?: string;
};

function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-6 dark:text-white">
      <h1 className="text-3xl font-bold dark:text-white">
  {title}
</h1>

      {subtitle && (
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default PageHeader;