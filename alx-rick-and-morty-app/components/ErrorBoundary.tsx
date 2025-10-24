import React ,{ ReactNode } from "react";
import * as sentry from "@sentry/react"

interface State {
  hasError: boolean;
}
interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // update state so the next render shows the fallback UI
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // send only serializable extras as a plain object
    sentry.captureException(error, { extra: { componentStack: errorInfo.componentStack } });
  }

   render(){
    if (this.state.hasError) {
        return (
            <div>
                <h2>oops , there is an error!</h2>
                <button onClick={() => this.setState({hasError: false})}>Try Again?</button>
            </div>
        )
   }  
   return this.props.children;
}
}
export default ErrorBoundary;
