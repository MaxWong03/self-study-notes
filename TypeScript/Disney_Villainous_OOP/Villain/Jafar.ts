import Villain = require('./Villain');
import RealmLocation = require('../RealmLocation');
import GainPower = require('../Action/GainPower');
import PlayCard = require('../Action/PlayCard');
import Activate = require('../Action/Activate');
import Vanquish = require('../Action/Vanquish');
import Fate = require('../Action/Fate');
import MoveAllyItem = require('../Action/MoveAllyItem');
import Discard = require('../Action/Discard');

class Jafar extends Villain {
  name: string = 'Jafar';
  objective: string = "Start your turn with Magic Lamp at the Sultan's Palace and have Genie on your side";
  realm: Array<RealmLocation> = [
    new RealmLocation('Sultan Palace', false, [new PlayCard(), new Activate()], [new Vanquish(), new Fate()]),
    new RealmLocation('Streets Of Agrabah', false, [new GainPower(1), new Fate()], [new Discard(), new PlayCard()]),
    new RealmLocation('Oasis', false, [new Activate(), new PlayCard()], [new GainPower(3), new PlayCard()]),
    new RealmLocation('Cave Of Wonders', true, [new Discard(), new GainPower(2)], [new PlayCard(), new MoveAllyItem()])
  ];
  
  currentLocation: string = 'Sultan Palace';
  constructor(power: number) {
    super();
    this.power = power;
  }

}

export = Jafar;
