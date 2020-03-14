import { Player } from './class';

describe('class tests', () => {
  const player = new Player();

  beforeAll(() => {
    // console.log('beforeAll');
  });
  beforeEach(() => {
    // console.log('beforeEach');
  });
  afterAll(() => {
    // console.log('afterAll');
  });
  afterEach(() => {
    player.hp = 100;
    // console.log('afterEach');
  });

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
  it('should return 0 hp, if it takes 100 damage', () => {
    // const player = new Player();
    const resp = player.takeDamage(100);
    expect(resp).toBe(0);
  });
});
