import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renders all sections', () => {
  describe('it should render the Variable Assignment section', () => {
    test('it should render the title', () => {
      render(<App />);
      let assignmentSection = screen.getByText(/Variable Assignment/i);
      expect(assignmentSection).toBeInTheDocument();
    });
    test('it should render an image', () => {
      render(<App />);
      let renderedImg = screen.getByAltText("Assignment Code Snippet");
      expect(renderedImg).toBeInTheDocument();
    })
  })

  describe('it should render the Basic Math section', () => {
    test('it should render the title', () => {
      render(<App />);
      let mathSection = screen.getByText(/Basic Math Operations/i);
      expect(mathSection).toBeInTheDocument();
    });
  })
});
