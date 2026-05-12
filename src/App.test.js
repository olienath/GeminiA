// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GeminiAPI title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GeminiAPI/i);
    expect(titleElement).toBeInTheDocument();
});
