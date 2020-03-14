import { message } from './string';

describe('string tests', () => {
  it('should return a string', () => {
    const resp = message('jonnyalexbh');
    expect(typeof resp).toBe('string');
  });
});
