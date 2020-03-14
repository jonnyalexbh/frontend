import { UserLoggedIn } from "./boolean";

describe('boolean tests', () => {
  it('should return true', () => {
    const resp = UserLoggedIn();
    expect(resp).toBeTruthy();
  });
});
