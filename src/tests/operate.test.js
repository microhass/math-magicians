import operate from '../logic/operate';

describe('operate function logic', () => {
  it('perform addition correctly', () => {
    expect(operate(1, 1, '+')).toBe('2');
    expect(operate(3.3, 4.4, '+')).toBe('7.7');
  });

  it('perform subtraction correctly', () => {
    expect(operate(7, 3, '-')).toBe('4');
    expect(operate(8.9, 0.8, '-')).toBe('8.1');
  });

  it('perform multiplication correctly', () => {
    expect(operate(0, 4, 'x')).toBe('0');
    expect(operate(10, 6, 'x')).toBe('60');
  });

  it('perform division correctly', () => {
    expect(operate(6, 3, '÷')).toBe('2');
    expect(operate(0, 1, '÷')).toBe('0');
  });
});
