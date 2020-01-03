"use strict";
exports.__esModule = true;
var RealmLocation = require("./RealmLocation");
var Villain = /** @class */ (function () {
    function Villain(name, objective, realm) {
        this.name = name;
        this.objective = objective;
        this.realm = realm;
    }
    return Villain;
}());
var SultanPalace = new RealmLocation('Sultan Palace');
var StreetsOfAgrabah = new RealmLocation('Streets Of Agrabah');
var Oasis = new RealmLocation('Oasis');
var CaveOfWonders = new RealmLocation('Cave Of Wonders', true);
var JafarRealm = [SultanPalace, StreetsOfAgrabah, Oasis, CaveOfWonders];
var Jafar = new Villain('Jafar', "Start your turn with Magic Lamp at the Sultan's Palace and have Genie on your side", JafarRealm);
console.log(Jafar.name);
console.log(Jafar.objective);
console.log(Jafar.realm);
