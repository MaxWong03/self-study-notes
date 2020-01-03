import RealmLocation = require('./RealmLocation');
import Action = require('./Action');

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

const GainPower = new Action('Gain Power');
const Vanquish = new Action('Vanquish');
const Fate = new Action('Fate');
const MoveAllyOrItem = new Action('MoveAllyOrItem');
const Discard = new Action ('Discard');
const Activate = new Action ('Activate');
const PlayACard = new Action('Play A Card');

const SultanPalace = new RealmLocation('Sultan Palace', false, [PlayACard, Activate], [Vanquish, Fate]);
const StreetsOfAgrabah = new RealmLocation('Streets Of Agrabah', false, [GainPower, Fate], [Discard, PlayACard]);
const Oasis = new RealmLocation('Oasis', false, [Activate, PlayACard], [GainPower, PlayACard]);
const CaveOfWonders = new RealmLocation('Cave Of Wonders', true, [Discard, GainPower], [PlayACard, MoveAllyOrItem]);
const JafarRealm = [SultanPalace, StreetsOfAgrabah, Oasis, CaveOfWonders];

const Jafar = new Villain('Jafar', "Start your turn with Magic Lamp at the Sultan's Palace and have Genie on your side", JafarRealm);

console.log(Jafar.name);
console.log(Jafar.objective);
console.log(Jafar.realm);