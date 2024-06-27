import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './index'; // Adjust the import path as per your file structure
import '@testing-library/jest-dom';



describe('Avatar Component', () => {
    it('renders without crashing', () => {
      render(<Avatar />);
    });
  
    it('renders with alt text', () => {
      const altText = 'User Avatar';
      const { getByAltText } = render(<Avatar alt={altText} />);
      expect(getByAltText(altText)).toBeInTheDocument();
    });
  
    it('renders with source image', () => {
      const altText = 'User Avatar';
      const { getByRole } = render(<Avatar alt={altText} src="avatar.svg" />);
      const avatarImage = getByRole('img');
      expect(avatarImage).toBeInTheDocument();
      expect(avatarImage).toHaveAttribute('src', 'avatar.svg');
      expect(avatarImage).toHaveAttribute('alt', altText); 
    });
  
    it('applies custom styling correctly', () => {
      const { container } = render(<Avatar alt="User Avatar" src="avatar.svg" />);
      const avatarElement = container.firstChild;
      expect(avatarElement).toHaveStyle(`
        width: 32px;
        height: 32px;
        border-radius: 12px;
        margin: 8px;
        opacity: 1;
      `);
    });
  });