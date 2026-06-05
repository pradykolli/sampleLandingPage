
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TopBar, BottomBar } from '../components/Bar';

describe('Bar Components', () => {
  describe('TopBar', () => {
    it('renders all items', () => {
      const items = ['Item 1', 'Item 2', 'Item 3'];
      render(<TopBar items={items} />);

      items.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });

    it('renders with correct styling class', () => {
      const { container } = render(<TopBar items={['Test']} />);
      expect(container.querySelector('.topBar')).toBeInTheDocument();
    });

    it('renders empty when no items provided', () => {
      const { container } = render(<TopBar items={[]} />);
      const barItems = container.querySelectorAll('.barItem');
      expect(barItems.length).toBe(0);
    });
  });

  describe('BottomBar', () => {
    it('renders all items', () => {
      const items = ['Item 1', 'Item 2'];
      render(<BottomBar items={items} />);

      items.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });

    it('renders with correct styling class', () => {
      const { container } = render(<BottomBar items={['Test']} />);
      expect(container.querySelector('.bottomBar')).toBeInTheDocument();
    });

    it('applies barItemRight class to items after first', () => {
      const { container } = render(
        <BottomBar items={['Left', 'Right']} />
      );
      const items = container.querySelectorAll('.barItem');
      expect(items[0].classList.contains('barItemRight')).toBe(false);
      expect(items[1].classList.contains('barItemRight')).toBe(true);
    });
  });
});
