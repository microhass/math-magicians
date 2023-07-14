import calculate from '../logic/calculate';

describe('calculate function logic', () => {
  let state;

  beforeEach(() => {
    state = {
      total: null,
      next: null,
      operation: null,
    };
  });

  it('should record input numbers correctly', () => {
    state = calculate(state, '1');
    state = calculate(state, '2');
    expect(state.next).toBe('12');
    state = calculate(state, '+');
    state = calculate(state, '3');
    expect(state.next).toBe('3');
  });

  it('should clear the state on AC', () => {
    state = calculate(state, '9');
    state = calculate(state, '7');
    state = calculate(state, 'AC');
    expect(state).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should calculate result accurately', () => {
    state = calculate(state, '22');
    state = calculate(state, 'x');
    state = calculate(state, '10');
    state = calculate(state, '=');
    expect(state.total).toBe('220');
  });
});
