
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CornerMark from '../components/CornerMark';

describe('CornerMark Component', () => {
  it('renders corner mark with correct position class - top left', () => {
    const { container } = render(<CornerMark position="tl" />);
    expect(container.querySelector('.cornerTl')).toBeInTheDocument();
  });

  it('renders corner mark with correct position class - top right', () => {
    const { container } = render(<CornerMark position="tr" />);
    expect(container.querySelector('.cornerTr')).toBeInTheDocument();
  });

  it('renders corner mark with correct position class - bottom left', () => {
    const { container } = render(<CornerMark position="bl" />);
    expect(container.querySelector('.cornerBl')).toBeInTheDocument();
  });

  it('renders corner mark with correct position class - bottom right', () => {
    const { container } = render(<CornerMark position="br" />);
    expect(container.querySelector('.cornerBr')).toBeInTheDocument();
  });

  it('renders vertical and horizontal lines', () => {
    const { container } = render(<CornerMark position="tl" />);
    const verticalLines = container.querySelectorAll('.cornerVertical');
    const horizontalLines = container.querySelectorAll('.cornerHorizontal');

    expect(verticalLines.length).toBe(1);
    expect(horizontalLines.length).toBe(1);
  });
});
