
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tagline from '../components/Tagline';

describe('Tagline Component', () => {
  it('renders the tagline text', () => {
    render(<Tagline />);
    expect(screen.getByText(/The Future Starts Here/)).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(
      <Tagline
        text="Custom Text "
        accentText="Custom Accent"
        suffix=" Custom Suffix"
      />
    );
    expect(screen.getByText(/Custom Text/)).toBeInTheDocument();
    expect(screen.getByText('Custom Accent')).toBeInTheDocument();
    expect(screen.getByText(/Custom Suffix/)).toBeInTheDocument();
  });

  it('renders accent text with correct styling class', () => {
    const { container } = render(<Tagline accentText="Toronto" />);
    const accentSpan = container.querySelector('.taglineAccent');
    expect(accentSpan).toBeInTheDocument();
    expect(accentSpan?.textContent).toBe('Toronto');
  });

  it('renders with default props', () => {
    render(<Tagline />);
    expect(screen.getByText('Toronto')).toBeInTheDocument();
    expect(screen.getByText(/Limited Drops/)).toBeInTheDocument();
  });
});
