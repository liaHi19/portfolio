export const FieldError = ({
  id,
  message,
}: {
  id: string;
  message?: string;
}) => {
  return (
    <p
      id={id}
      aria-hidden={!message}
      className="mt-1.5 text-xs text-red-400 h-4 transition-opacity duration-200"
      style={{ opacity: message ? 1 : 0 }}
    >
      {message ?? " "}
    </p>
  );
};

export default FieldError;
