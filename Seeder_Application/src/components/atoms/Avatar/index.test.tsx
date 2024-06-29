import React from 'react';
import Avatar from './index';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('Avatar Component', () => {
  it('renders without crashing', () => {
    render(<Avatar />);
  });

  it('renders with alt text', async () => {
    const altText = 'User Avatar';
    render(<Avatar alt={altText} src="image.svg" />);
    const element = await waitFor(() => screen.getByAltText(altText));
    expect(element).toBeInTheDocument();
  });

  it('renders with source image', () => {
    const altText = 'User Avatar';
    const src = 'avatar.svg';
    render(<Avatar alt={altText} src={src} />);
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', src);
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
    `);
  });
});