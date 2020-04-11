(function () {

  const myFunction = function (a: string) {
    return a.toUpperCase();
  }

  const myFunctionF = (a: string) => a.toUpperCase();

  console.log(myFunction('NORMAL'));
  console.log(myFunctionF('FLECHA'));

})();

