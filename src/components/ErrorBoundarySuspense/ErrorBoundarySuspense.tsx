import { Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
  suspenseFallback?: React.ReactNode;
  resetKey?: string;
};

const FallbackComponent = ({ error }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

export const ErrorBoundarySuspense = ({ children, suspenseFallback, resetKey }: Props) => {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      resetKeys={resetKey ? [resetKey] : undefined}
    >
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
