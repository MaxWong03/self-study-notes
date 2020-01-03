"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jafar = require("../Villain/Jafar");
var Villain = require("../Villain/Villain");
describe('Jafar', function () {
    var jafar = new Jafar();
    test('Attributes', function () {
        expect(jafar instanceof Villain).toBeTruthy();
        expect(jafar.name).toBe('Jafar');
        expect(jafar.realm.length).toBe(4);
        expect(jafar.currentLocation).toBe('Sultan Palace');
    });
    test('General Methods', function () {
        expect(jafar.hasLockedLocation()).toBeTruthy();
        expect(jafar.hasLockedLocation()).not.toBeFalsy();
    });
    test('Moving', function () {
        // jafar.move(jafar.currentLocation)
    });
});
