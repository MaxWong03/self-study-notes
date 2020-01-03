import Villain = require('./Villain');
import RealmLocation = require('../RealmLocation');
import Action = require('../Action/Action');

class Jafar extends Villain {
  name: string = 'Jafar';
  objective: string = "Start your turn with Magic Lamp at the Sultan's Palace and have Genie on your side";
  realm: Array<RealmLocation> = [
    new RealmLocation('Sultan Palace', false, [new Action('Play A Card'), new Action('Activate')], [new Action('Vanquish'), new Action('Fate')]),
    new RealmLocation('Streets Of Agrabah', false, [new Action('GainPower'), new Action('Fate')], [new Action('Discard'), new Action('PlayACard')]),
    new RealmLocation('Oasis', false, [new Action('Activate'), new Action('PlayACard')], [new Action('GainPower'), new Action('PlayACard')]),
    new RealmLocation('Cave Of Wonders', true, [new Action('Discard'), new Action('GainPower')], [new Action('PlayACard'), new Action('MoveAllyOrItem')])
  ]
}

export = Jafar;