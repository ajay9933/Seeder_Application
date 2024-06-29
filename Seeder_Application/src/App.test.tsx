import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the "toBeInTheDocument" matcher
import App from './App'; // Adjust the import path as necessary

describe('App component', () => {
    it('renders Seeder Application text', () => {
        render(<App />);
        const paragraphElement = screen.getByText('Seeder Application');
        expect(paragraphElement).toBeInTheDocument();
    });
});
