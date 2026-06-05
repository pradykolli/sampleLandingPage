
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Waitlist from '../components/Waitlist';

describe('Waitlist Component', () => {
  it('renders the waitlist form', () => {
    render(<Waitlist />);
    expect(screen.getByText('Drop 001 — Be First')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Notify Me' })).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(
      <Waitlist
        label="Custom Label"
        placeholder="custom@placeholder.com"
        buttonText="Subscribe"
      />
    );
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('custom@placeholder.com')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument();
  });

  it('shows error when submitting without email', async () => {
    render(<Waitlist />);
    const submitButton = screen.getByRole('button', { name: 'Notify Me' });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });

  it('shows error for invalid email format', async () => {
    render(<Waitlist />);
    const input = screen.getByPlaceholderText('your@email.com');
    const submitButton = screen.getByRole('button', { name: 'Notify Me' });

    await userEvent.type(input, 'invalid-email');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText('Please enter a valid email address')
      ).toBeInTheDocument();
    });
  });

  it('shows success message on valid email submission', async () => {
    render(<Waitlist />);
    const input = screen.getByPlaceholderText('your@email.com');
    const submitButton = screen.getByRole('button', { name: 'Notify Me' });

    await userEvent.type(input, 'valid@email.com');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("You're in. Watch for DROP 001 — 2035.")
      ).toBeInTheDocument();
    });
  });

  it('calls onSubmit callback with email', async () => {
    const mockSubmit = jest.fn();
    render(<Waitlist onSubmit={mockSubmit} />);
    const input = screen.getByPlaceholderText('your@email.com');
    const submitButton = screen.getByRole('button', { name: 'Notify Me' });

    await userEvent.type(input, 'test@example.com');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith('test@example.com');
    });
  });

  it('submits on Enter key press', async () => {
    const mockSubmit = jest.fn();
    render(<Waitlist onSubmit={mockSubmit} />);
    const input = screen.getByPlaceholderText('your@email.com') as HTMLInputElement;

    await userEvent.type(input, 'test@example.com');
    await userEvent.keyboard('{Enter}');

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith('test@example.com');
    });
  });

  it('renders note text', () => {
    render(<Waitlist noteText="Custom Note" />);
    expect(screen.getByText('Custom Note')).toBeInTheDocument();
  });

  it('clears error on input change', async () => {
    render(<Waitlist />);
    const input = screen.getByPlaceholderText('your@email.com');
    const submitButton = screen.getByRole('button', { name: 'Notify Me' });

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    await userEvent.type(input, 'valid@email.com');
    await waitFor(() => {
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
    });
  });
});
