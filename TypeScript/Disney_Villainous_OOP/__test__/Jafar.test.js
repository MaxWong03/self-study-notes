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
        expect(jafar.power).toBe(0);
    });
    test('General Methods', function () {
        expect(jafar.hasLockedLocation()).toBeTruthy();
        expect(jafar.hasLockedLocation()).not.toBeFalsy();
    });
    test('Moving', function () {
        expect(function () { jafar.move(jafar.currentLocation); }).toThrow();
        jafar.move('Streets Of Agrabah');
        expect(jafar.currentLocation).toBe('Streets Of Agrabah');
        expect(jafar.currentLocation).not.toBe('Sultan Palace');
        expect(function () { jafar.move('Cave Of Wonders'); }).toThrow();
    });
});
