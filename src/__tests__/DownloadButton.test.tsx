
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DownloadButton from '../components/DownloadButton';

describe('DownloadButton Component', () => {
  it('renders button with label text', () => {
    render(<DownloadButton label="Download" onClick={() => {}} />);
    expect(screen.getByRole('button', { name: 'Download' })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const mockClick = jest.fn();
    render(<DownloadButton label="Download" onClick={mockClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary class when isPrimary is true', () => {
    const { container } = render(
      <DownloadButton label="Download" onClick={() => {}} isPrimary={true} />
    );
    const button = container.querySelector('.dlBtnPrimary');
    expect(button).toBeInTheDocument();
  });

  it('renders with custom aria label', () => {
    render(
      <DownloadButton
        label="Download"
        onClick={() => {}}
        ariaLabel="Download custom file"
      />
    );
    expect(screen.getByLabelText('Download custom file')).toBeInTheDocument();
  });

  it('has title attribute set to label', () => {
    render(<DownloadButton label="Download" onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Download');
  });
});
