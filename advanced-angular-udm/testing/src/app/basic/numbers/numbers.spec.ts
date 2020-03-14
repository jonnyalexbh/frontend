import { increase } from './numbers';

describe('numbers test', () => {
  it('should return 100 if the number entered is greater than 100', () => {
    const resp = increase(300);
    expect(resp).toBe(100);
  });
  it('it should return the number entered + 1, if it is not greater than 100', () => {
    const resp = increase(50);
    expect(resp).toBe(51);
  });
});
