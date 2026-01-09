import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): Partial<State> {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log error details to console
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // You can also log to an error reporting service here
        // Example: logErrorToService(error, errorInfo);

        this.setState({
            error,
            errorInfo,
        });
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    handleReload = () => {
        window.location.reload();
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI provided
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default fallback UI
            return (
                <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
                    <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
                        <div className="text-center">
                            {/* Error Icon */}
                            <div className="mx-auto w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    className="w-10 h-10 text-red-600 dark:text-red-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>

                            {/* Error Title */}
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                Oops! Something went wrong
                            </h1>

                            {/* Error Description */}
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                We encountered an unexpected error. Don't worry, our team has been notified.
                            </p>

                            {/* Error Details (in development mode) */}
                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <div className="mb-8 text-left">
                                    <details className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                        <summary className="cursor-pointer font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                            Error Details (Development Only)
                                        </summary>
                                        <div className="mt-4 space-y-2">
                                            <div>
                                                <p className="font-mono text-sm text-red-600 dark:text-red-400">
                                                    {this.state.error.toString()}
                                                </p>
                                            </div>
                                            {this.state.errorInfo && (
                                                <div className="mt-4">
                                                    <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                        Component Stack:
                                                    </p>
                                                    <pre className="text-xs overflow-auto bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600">
                                                        {this.state.errorInfo.componentStack}
                                                    </pre>
                                                </div>
                                            )}
                                        </div>
                                    </details>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={this.handleReload}
                                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-utavu-purple to-utavu-green text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                >
                                    Reload Page
                                </button>
                                <button
                                    onClick={this.handleGoHome}
                                    className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200"
                                >
                                    Go to Home
                                </button>
                            </div>

                            {/* Additional Help */}
                            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                                If this problem persists, please{' '}
                                <a
                                    href="/contact"
                                    className="text-utavu-purple hover:text-utavu-purple-dark underline"
                                >
                                    contact our support team
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
