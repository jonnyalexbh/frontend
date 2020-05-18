
import { Player2 } from './player2';

describe('emmit player2', () => {
  let player2: Player2;

  beforeEach(() => player2 = new Player2());

  it('should emit an event when it takes damage', () => {
    let newHp = 0;

    player2.hpChange.subscribe(hp => {
      newHp = hp;
    });

    player2.takeDamage(1000);
    expect(newHp).toBe(0);
  });

  it('should emit an event when it takes damage and survive if it is less than 100', () => {
    let newHp = 0;

    player2.hpChange.subscribe(hp => {
      newHp = hp;
    });

    player2.takeDamage(30);
    expect(newHp).toBe(70);
  });
});
