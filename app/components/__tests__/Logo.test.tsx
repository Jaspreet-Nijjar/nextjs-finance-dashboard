import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('#Logo', () => {
  it('renders the logo component', () => {
    render(<Logo />);
    expect(screen.getByText('Quick')).toBeInTheDocument();
    expect(screen.getByText(/Finance Manager/i)).toBeInTheDocument();

    const span = screen.getByText('Track');
    expect(screen.getByText('Track')).toBeInTheDocument();
  });

  it('contains a link to the homepage', () => {
    render(<Logo />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
