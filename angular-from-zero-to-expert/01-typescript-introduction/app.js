"use strict";
(function () {
    function greet(name) {
        console.table('Hello ' + name); // Hola Logan
    }
    var wolverine = {
        name: 'Logan'
    };
    greet(wolverine.name);
})();
