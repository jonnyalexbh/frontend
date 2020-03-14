import { message } from './string';

describe('string tests', () => {

  it('should return a string', () => {
    const resp = message('jonnyalexbh');
    expect(typeof resp).toBe('string');
  });

  it('should return a greeting with the name sent', () => {
    const name = 'Tankis'
    const resp = message(name);
    expect(resp).toContain(name);
  });

});
