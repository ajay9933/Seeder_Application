import React from 'react';
import { render } from '@testing-library/react';
import CustomChip from './index'; // Adjust the import path as per your file structure
import '@testing-library/jest-dom';
describe('CustomChip Component', () => {
    it('renders without crashing', () => {
      render(<CustomChip />);
    });
  
    it('renders with label', () => {
      const { getByText } = render(<CustomChip label="Test Chip" />);
      expect(getByText('Test Chip')).toBeInTheDocument();
    });
  
    it('applies custom background color', () => {
      const { container } = render(<CustomChip backgroundColor="#ff0000" />);
      const chip = container.firstChild as HTMLElement;
      expect(chip).toHaveStyle('background-color: #ff0000');
    });
  
    // Add more test cases as needed for other props like fontSize, fontFamily, etc.
  });