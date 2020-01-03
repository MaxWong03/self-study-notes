import Jafar = require('../Villain/Jafar');
import Villain = require('../Villain/Villain');

describe('Jafar', () => {
  const jafar = new Jafar();
  test('Attributes', () => {
    expect(jafar instanceof Villain).toBeTruthy();
    expect(jafar.name).toBe('Jafar');
    expect(jafar.realm.length).toBe(4);
    expect(jafar.currentLocation).toBe('Sultan Palace');
    expect(jafar.power).toBe(0);
  });

  test('General Methods', () => {
    expect(jafar.hasLockedLocation()).toBeTruthy();
    expect(jafar.hasLockedLocation()).not.toBeFalsy();
  });

  test('Moving', () => {
    expect(() => { jafar.move(jafar.currentLocation) }).toThrow();
    jafar.move('Streets Of Agrabah');
    expect(jafar.currentLocation).toBe('Streets Of Agrabah');
    expect(jafar.currentLocation).not.toBe('Sultan Palace');
    expect(() => { jafar.move('Cave Of Wonders') }).toThrow();
  });
})

