(() => {
  console.log('Start');

  const prom1 = new Promise((resolve, reject) => {

    setTimeout(() => {
      reject('timeout is over');
    }, 1000)

  });

  prom1
    .then(mesagge => console.log(mesagge))
    .catch(error => console.warn(error));

  console.log('End');
})();

