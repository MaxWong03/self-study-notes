import Jafar = require('../Villain/Jafar');
import Villain = require('../Villain/Villain');

describe('Jafar', () => {
  const jafar = new Jafar();
  test('Attributes', () => {
    expect(jafar instanceof Villain).toBeTruthy();
    expect(jafar.name).toBe('Jafar');
    expect(jafar.realm.length).toBe(4);
    expect(jafar.currentLocation).toBe('Sultan Palace');
  });

  test('General Methods', () => {
    expect(jafar.hasLockedLocation()).toBeTruthy();
    expect(jafar.hasLockedLocation()).not.toBeFalsy();
  });

  test('Moving', () => {
    expect(() => { jafar.move(jafar.currentLocation) }).toThrow();
  });
})

