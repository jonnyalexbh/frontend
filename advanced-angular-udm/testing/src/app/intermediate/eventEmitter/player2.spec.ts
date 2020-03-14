import { Player2 } from './player2';

describe('player 2 Emit', () => {
  let player: Player2;

  beforeEach(() => player = new Player2());

  it('should emit an event when it takes damage', () => {
    let newHp = 0;
    player.hpChange.subscribe(hp => {
      newHp = hp;
      console.log('***', hp);
    });
    player.takeDamage(1000);
    expect(newHp).toBe(0);
  });

  it('it should emit an event when it takes damage, and survive if it is less than 100', () => {
    let newHp = 0;
    player.hpChange.subscribe(hp => newHp = hp);
    player.takeDamage(50);
    expect(newHp).toBe(50);
  });
});
