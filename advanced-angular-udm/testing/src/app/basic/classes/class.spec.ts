import { Player } from './class';

describe('class tests', () => {

  // beforeAll();
  // beforeEach();
  // afterAll();
  // afterEach();

  const player = new Player();
  it('should return 80 hp, if it takes 20 damage', () => {
    // const player = new Player();
    const resp = player.takeDamage(20);
    expect(resp).toBe(80);
  });
  it('should return 50 hp, if it takes 50 damage', () => {
    // const player = new Player();
    const resp = player.takeDamage(50);
    expect(resp).toBe(50);
  });
});
