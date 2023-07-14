import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Homepage rendering', () => {
  it('should correctly render the homepage', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
