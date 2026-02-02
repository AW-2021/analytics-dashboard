interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="h-full flex items-center justify-center">
      <p className="text-red-700 bg-red-100 p-2 rounded">{error}</p>
    </div>
  );
};

export default ErrorMessage;
