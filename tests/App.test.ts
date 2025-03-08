// App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  test('renders heading and logos', () => {
    render(<App />);

    // Verifica que se muestre el heading "Vite + React"
    const heading = screen.getByText(/Vite \+ React/i);
    expect(heading).toBeInTheDocument();

    // Verifica que existan los logos (según el alt text)
    const viteLogo = screen.getByAltText(/Vite logo/i);
    const reactLogo = screen.getByAltText(/React logo/i);
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    render(<App />);

    // Busca el botón que muestra el contador
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    // Haz click y verifica que el contador incrementa
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument();
  });
});
