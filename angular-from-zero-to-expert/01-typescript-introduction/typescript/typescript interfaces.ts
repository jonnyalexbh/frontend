(() => {
  interface Xmen {
    name: string,
    age: number,
    power?: string
  }

  const sendMission = (xmen: Xmen) => {
    console.log(`sending name ${xmen.name}`);
  };

  const returnBarracks = (xmen: Xmen) => {
    console.log(`sending name ${xmen.name}`);
  };

  const wolverine = {
    name: 'Logan',
    age: 60
  };

  sendMission(wolverine);
})();

