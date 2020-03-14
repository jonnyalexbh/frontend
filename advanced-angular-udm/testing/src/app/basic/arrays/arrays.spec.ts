import { getRobots } from './arrays';

describe('array testing', () => {
  it('should return at least 3 robots', () => {
    const resp = getRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  it('should exist MegaMan and Ultron', () => {
    const resp = getRobots();
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });
});
