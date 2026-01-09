import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    text?: string;
    fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'md',
    text = 'Loading...',
    fullScreen = false,
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24',
    };

    const textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    };

    const spinnerContent = (
        <div className="flex flex-col items-center justify-center gap-4">
            {/* Spinner */}
            <div className="relative">
                <div
                    className={`${sizeClasses[size]} rounded-full border-4 border-gray-200 dark:border-gray-700`}
                ></div>
                <div
                    className={`${sizeClasses[size]} rounded-full border-4 border-transparent border-t-utavu-purple border-r-utavu-green animate-spin absolute top-0 left-0`}
                ></div>
            </div>

            {/* Loading Text */}
            {text && (
                <p className={`${textSizeClasses[size]} text-gray-600 dark:text-gray-400 font-medium`}>
                    {text}
                </p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-gray-900">
                {spinnerContent}
            </div>
        );
    }

    return spinnerContent;
};

export default LoadingSpinner;
