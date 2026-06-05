
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from '../components/Logo';

describe('Logo Component', () => {
  it('renders the logo SVG', () => {
    render(<Logo />);
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
  });

  it('has correct aria label', () => {
    render(<Logo ariaLabel="Test Logo" />);
    const svg = screen.getByLabelText('Test Logo');
    expect(svg).toBeInTheDocument();
  });

  it('contains all letter elements', () => {
    const { container } = render(<Logo />);
    const rects = container.querySelectorAll('rect');
    expect(rects.length).toBeGreaterThan(0);
  });

  it('contains glitch layers', () => {
    const { container } = render(<Logo />);
    const glitchLayers = container.querySelectorAll('.glitchLayer');
    expect(glitchLayers.length).toBeGreaterThan(0);
  });
});
