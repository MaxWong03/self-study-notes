import Jafar = require('../Villain/Jafar');
import Villain = require('../Villain/Villain');

describe('Jafar', () => {
  test('Attributes', () => {
    const jafar = new Jafar(3);
    expect(jafar instanceof Villain).toBeTruthy();
    expect(jafar.name).toBe('Jafar');
    expect(jafar.realm.length).toBe(4);
    expect(jafar.currentLocation).toBe('Sultan Palace');
    expect(jafar.power).toBe(3);
  });

  test('General Methods', () => {
    const jafar = new Jafar(0);
    expect(jafar.hasLockedLocation()).toBeTruthy();
    expect(jafar.hasLockedLocation()).not.toBeFalsy();
    jafar.power = 3;
    expect(jafar.power).toBe(3);
  });

  test('Moving', () => {
    const jafar = new Jafar(0);
    expect(() => { jafar.move(jafar.currentLocation) }).toThrow();
    jafar.move('Streets Of Agrabah');
    expect(jafar.currentLocation).toBe('Streets Of Agrabah');
    expect(jafar.currentLocation).not.toBe('Sultan Palace');
    expect(() => { jafar.move('Cave Of Wonders') }).toThrow();
  });

  test('Moving to locations with Gain Power Action', () => {
    const jafar = new Jafar(0);
    jafar.move('Streets Of Agrabah');
    expect(jafar.currentLocation).toBe('Streets Of Agrabah');
    const currentLocation = jafar.getLocationClass('Streets Of Agrabah');
    currentLocation.topActions[0].execute(jafar);
    expect(jafar.power).toBe(1);
  })
})

