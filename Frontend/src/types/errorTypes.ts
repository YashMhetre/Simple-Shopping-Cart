import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface ErrorFallbackProps {
  error?: Error | null;
  resetError?: () => void;
  message?: string;
}

export interface ErrorStateProps {
  error: string;
}
