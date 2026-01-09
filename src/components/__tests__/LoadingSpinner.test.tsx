import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
    it('should render with default props', () => {
        render(<LoadingSpinner />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render with custom text', () => {
        render(<LoadingSpinner text="Please wait..." />);
        expect(screen.getByText('Please wait...')).toBeInTheDocument();
    });

    it('should render without text when text prop is empty', () => {
        render(<LoadingSpinner text="" />);
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('should render in full screen mode', () => {
        const { container } = render(<LoadingSpinner fullScreen />);
        const fullScreenDiv = container.querySelector('.min-h-screen');
        expect(fullScreenDiv).toBeInTheDocument();
    });

    it('should apply correct size classes', () => {
        const { container: containerSm } = render(<LoadingSpinner size="sm" />);
        expect(containerSm.querySelector('.w-8')).toBeInTheDocument();

        const { container: containerLg } = render(<LoadingSpinner size="lg" />);
        expect(containerLg.querySelector('.w-16')).toBeInTheDocument();
    });
});
