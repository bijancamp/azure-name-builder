import React from 'react';

import {
  Body1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Subtitle1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ErrorCircle20Filled, RocketFilled } from '@fluentui/react-icons';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
  },
  card: {
    maxWidth: '325px',
    textAlign: 'center',
  },
  icon: {
    color: tokens.colorStatusDangerForeground3,
  },
  title: {
    marginBottom: '16px',
  },
  message: {
    margin: 0,
  },
});

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details in development mode
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error);
      console.error('Error info:', errorInfo);
    }
  }

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onGoHome={this.handleGoHome} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  onGoHome: () => void;
}

function ErrorFallback({ onGoHome }: ErrorFallbackProps) {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader
          image={<ErrorCircle20Filled className={styles.icon} />}
          header={
            <header>
              <Subtitle1 as="h1">Houston, We Have an Error!</Subtitle1>
            </header>
          }
        />
        <Body1 as="p" className={styles.message}>
          There&apos;s a minor glitch in the naming mission. Let&apos;s head
          home to launch again.
        </Body1>
        <CardFooter>
          <Button
            appearance="primary"
            icon={<RocketFilled />}
            onClick={onGoHome}
          >
            Head Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ErrorBoundary;
