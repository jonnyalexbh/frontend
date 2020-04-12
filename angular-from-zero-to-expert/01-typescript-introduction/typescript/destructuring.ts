(() => {
  const avenger = {
    name: 'Steve',
    pass: 'Capitan America',
    power: 'Droga'
  }

  const extract = ({ name, pass }: any) => {
    // const { name, pass } = avenger;
    console.log(name);
    console.log(pass);
  }

  extract(avenger);

  const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
  const [loki, man, spider] = avengers;

  console.log(loki);
  console.log(man);
  console.log(spider);

})();

