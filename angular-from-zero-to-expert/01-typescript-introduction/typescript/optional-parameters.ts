(function () {

  function actived(who: string,
    moment?: string,
    object: string = 'Batisenal'
  ) {
    if (moment) {
      console.log(`${who}  activate ${object} in ${moment}`);
    }
    else {
      console.log(`${who}  activate ${object}`);
    }
  }

  actived('Gordon');

})();

