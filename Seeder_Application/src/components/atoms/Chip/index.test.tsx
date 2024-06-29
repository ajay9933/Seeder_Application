import React from 'react';

import StyledChip from './index';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('StyledChip component', () => {
    it('renders with default props', () => {
        render(<StyledChip label="Test Chip" />);
        const chipElement = screen.getByText('Test Chip');

       

        // Ensure chipElement has parent element
        expect(chipElement).toBeInTheDocument();
        if (chipElement.parentElement) {
            const chipComputedStyle = window.getComputedStyle(chipElement.parentElement);

           

            // Check computed styles
            expect(chipComputedStyle.backgroundColor).toBe('lightblue');
            expect(chipComputedStyle.borderRadius).toBe('4px');
            expect(chipComputedStyle.padding).toBe('4px 8px');
        } else {
            throw new Error('Parent element not found');
        }

        // Check label color
        expect(chipElement).toHaveStyle('color: black');
    });

    it('renders with custom color', () => {
        render(<StyledChip label="Custom Chip" customcolor="red" />);
        const chipLabelElement = screen.getByText('Custom Chip');

        expect(chipLabelElement).toBeInTheDocument();
        expect(chipLabelElement).toHaveStyle('color: red');
    });

    it('renders with specified width and height', () => {
        render(<StyledChip label="Sized Chip" width="200px" height="60px" />);
        const chipElement = screen.getByText('Sized Chip');

        // Ensure chipElement has parent element
        expect(chipElement).toBeInTheDocument();
        if (chipElement.parentElement) {
            const chipComputedStyle = window.getComputedStyle(chipElement.parentElement);

           
            // Check computed styles
            expect(chipComputedStyle.width).toBe('200px');
            expect(chipComputedStyle.height).toBe('60px');
        } else {
            throw new Error('Parent element not found');
        }
    });

    // Add more test cases for other props and scenarios as needed
});