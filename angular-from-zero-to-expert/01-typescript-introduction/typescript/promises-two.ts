(() => {
  const withdrawals = (amount: number): Promise<number> => {
    let currentMoney = 1000;

    return new Promise((resolve, reject) => {

      if (amount > currentMoney) {
        reject('there are not enough funds');
      } else {
        currentMoney -= amount;
        resolve(currentMoney);
      }

    });
  };

  withdrawals(600)
    .then(currentMoney => console.log(`total ${currentMoney}`))
    .catch(console.warn);
})();

