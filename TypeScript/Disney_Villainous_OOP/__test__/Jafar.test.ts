import Jafar = require('../Villain/Jafar');

describe('Jafar', () => {
  const jafar = new Jafar();
  test('Attributes', () => {
    expect(jafar.name).toBe('Jafar');
    expect(jafar.realm.length).toBe(4);
  });

  test('Methods', () => {
    expect(jafar.hasLockedLocation()).toBe(true);
    expect(jafar.hasLockedLocation()).not.toBe(false);
  });
})

