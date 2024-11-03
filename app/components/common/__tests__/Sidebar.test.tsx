import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Sidebar', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('renders all sidebar links', () => {
    render(<Sidebar />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Markets')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('contains the correct links with href attributes', () => {
    render(<Sidebar />);
    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute(
      'href',
      '/'
    );
    expect(screen.getByText('Markets').closest('a')).toHaveAttribute(
      'href',
      '/markets'
    );

    expect(screen.getByText('Portfolio').closest('a')).toHaveAttribute(
      'href',
      '/portfolio'
    );
  });
});
