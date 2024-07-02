import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App'; 

describe('App component', () => {
    it('renders Seeder Application text', () => {
        render(<App />);
        const paragraphElement = screen.getByText('Seeder Application');
        expect(paragraphElement).toBeInTheDocument();
    });
});
