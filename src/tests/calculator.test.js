import { fireEvent, render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator logic', () => {
  //   const { getByTestId, getByText } = render(<Calculator />);
  //   const display = getByTestId('screen');
  let getByTestId;
  let getByText;
  let display;

  beforeEach(() => {
    ({ getByTestId, getByText } = render(<Calculator />));
    display = getByTestId('screen');
    fireEvent.click(getByText('AC'));
  });

  it('should display right expressions and results', () => {
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    expect(display.textContent).toBe('1+3');
    fireEvent.click(getByText('='));
    expect(display.textContent).toBe('4');
  });

  it('should clear the screen on AC', () => {
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('2'));
    expect(display.textContent).toBe('72');
    fireEvent.click(getByText('AC'));
    expect(display.textContent).toBe('0');
  });
});
