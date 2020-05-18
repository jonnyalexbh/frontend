import { message, increase, userLogged, getRobots } from './basic';


describe('basic unit tests', () => {
  describe('string tests', () => {
    it('should return a string', () => {
      const reponse = message('Jonny');
      expect(typeof reponse).toBe('string');
    });

    it('should return a greeting with the name sent', () => {
      const name = 'Jonny';
      const reponse = message(name);
      expect(reponse).toContain(name);
    });
  });

  describe('number tests', () => {
    it('should return 100, if the number entered is greater than 100', () => {
      const res = increase(300);
      expect(res).toBe(100);
    });

    it('should return the number entered plus one if it is not greater than 100', () => {
      const res = increase(50);
      expect(res).toBe(51);
    });
  });

  describe('boolean tests', () => {
    it('logged in user should return true', () => {
      const res = userLogged();
      expect(res).toBeTruthy();
    });
  });

  describe('test arrays', () => {
    it('should return 3 robots', () => {
      const res = getRobots();
      expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('there should be Megaman Robocop', () => {
      const res = getRobots();
      expect(res).toContain('Megaman');
      expect(res).toContain('Robocop');
    });
  });
});



