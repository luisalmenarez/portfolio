const ErrorMessage = ({ children }) => {
  return (
    <span className="block mt-1 text-2xl text-red-600">
      <svg
        className="inline-block w-4 h-4 mr-1"
        fill="currentColor"
        viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm10 7a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1zM10 5.5a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </span>
  );
};

export default ErrorMessage;
