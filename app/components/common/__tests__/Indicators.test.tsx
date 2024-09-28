import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Indicators from '../Indicators';

describe('Indictators', () => {
  it('renders green text for positive data', () => {
    render(<Indicators data={5} />);
    expect(screen.getByText('5.0%')).toHaveClass('text-green-500');
  });

  it('renders red text for negative data', () => {
    render(<Indicators data={-5} />);
    expect(screen.getByText('5.0%')).toHaveClass('text-red-400');
  });
});
