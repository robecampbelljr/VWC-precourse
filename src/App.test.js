import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renders all sections', () => {
  test('it should render the Variable Assignment section', () => {
    render(<App />);
    let assignmentSection = screen.getByText(/Variable Assignment/i);
    expect(assignmentSection).toBeInTheDocument();
  });

  test('it should render the Basic Math section', () => {
    render(<App />);
    let mathSection = screen.getByText(/Basic Math Operations/i);
    expect(mathSection).toBeInTheDocument();
  });
});
