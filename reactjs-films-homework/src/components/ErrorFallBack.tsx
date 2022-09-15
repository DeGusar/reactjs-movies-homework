import { useNavigate } from 'react-router-dom';

type ErrorFallbackPropsType = {
  error: {
    message: string;
  };
  resetErrorBoundary: () => void;
};

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackPropsType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    resetErrorBoundary();
    navigate('/');
  };

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={handleClick}>Try again</button>
    </div>
  );
};
