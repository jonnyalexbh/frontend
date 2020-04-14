(() => {
  // class Avenger {
  //     name: string;
  //     team: string;
  //     realName?: string;

  //     canFight?: boolean;
  //     fightsWon?: number;

  //     constructor(name: string, team: string) {
  //         this.name = name;
  //         this.team = team;
  //     }
  // }

  // const antman = new Avenger('Antman', 'Capi');
  // console.log(antman);
  class Avenger {
    // name: string;
    // team: string;
    // realName?: string;

    // canFight?: boolean;
    // fightsWon?: number;

    constructor(public name: string,
      public team: string,
      public realName?: string,
      public canFight: boolean = true,
      public fightsWon: number = 0) {
    }
  }

  const antman = new Avenger('Antman', 'Capi');
  console.log(antman);

})();

