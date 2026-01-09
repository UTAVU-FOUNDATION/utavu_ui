import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class RouteErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): Partial<State> {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Route Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
                    <div className="max-w-lg w-full text-center">
                        {/* Error Icon */}
                        <div className="mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                            <svg
                                className="w-8 h-8 text-orange-600 dark:text-orange-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                        {/* Error Message */}
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Page Error
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            We couldn't load this page properly. Please try refreshing or go back to the homepage.
                        </p>

                        {/* Development Error Details */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-left">
                                <p className="text-sm font-mono text-red-600 dark:text-red-400 break-words">
                                    {this.state.error.toString()}
                                </p>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-utavu-purple to-utavu-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
                            >
                                Refresh Page
                            </button>
                            <Link
                                to="/"
                                className="w-full sm:w-auto px-6 py-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 text-center"
                            >
                                Go to Home
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default RouteErrorBoundary;
