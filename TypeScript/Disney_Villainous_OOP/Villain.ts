import RealmLocation = require('./RealmLocation');

class Villain {
  name: string;
  objective: string;
  realm: Array<RealmLocation>;

  constructor(name: string, objective: string, realm: Array<RealmLocation>) {
    this.name = name;
    this.objective = objective;
    this.realm = realm;
  }
}

const SultanPalace = new RealmLocation('Sultan Palace');
const StreetsOfAgrabah = new RealmLocation('Streets Of Agrabah');
const Oasis = new RealmLocation('Oasis');
const CaveOfWonders = new RealmLocation('Cave Of Wonders', true);
const JafarRealm = [SultanPalace, StreetsOfAgrabah, Oasis, CaveOfWonders];

const Jafar = new Villain('Jafar', "Start your turn with Magic Lamp at the Sultan's Palace and have Genie on your side", JafarRealm);

console.log(Jafar.name);
console.log(Jafar.objective);
console.log(Jafar.realm);