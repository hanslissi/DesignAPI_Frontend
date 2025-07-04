import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./ErrorBoundarySuspense.module.css";
import {
  OhNoErrorDisplay,
  type ErrorDisplaySize,
} from "@components/OhNoErrorDisplay/OhNoErrorDisplay";

type Props = {
  children: React.ReactNode;
  errorFallback?: React.ReactNode;
  defaultErrorFallbackSize?: ErrorDisplaySize;
  suspenseFallback?: React.ReactNode;
  resetKey?: string;
};

type FallbackComponentProps = {
  errorFallbackSize: ErrorDisplaySize;
};

const FallbackComponent = ({ errorFallbackSize }: FallbackComponentProps) => {
  return (
    <div role="alert" className={styles.fallbackError}>
      <OhNoErrorDisplay size={errorFallbackSize} />
    </div>
  );
};

export const ErrorBoundarySuspense = ({
  children,
  errorFallback,
  defaultErrorFallbackSize = "big",
  suspenseFallback,
  resetKey,
}: Props) => {
  return (
    <ErrorBoundary
      FallbackComponent={
        errorFallback
          ? () => errorFallback
          : () => (
              <FallbackComponent errorFallbackSize={defaultErrorFallbackSize} />
            )
      }
      resetKeys={resetKey ? [resetKey] : undefined}
    >
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
