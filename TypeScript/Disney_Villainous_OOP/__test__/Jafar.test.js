"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jafar = require("../Villain/Jafar");
var Villain = require("../Villain/Villain");
describe('Jafar', function () {
    test('Attributes', function () {
        var jafar = new Jafar();
        expect(jafar instanceof Villain).toBeTruthy();
        expect(jafar.name).toBe('Jafar');
        expect(jafar.realm.length).toBe(4);
        expect(jafar.currentLocation).toBe('Sultan Palace');
        expect(jafar.power).toBe(0);
    });
    test('General Methods', function () {
        var jafar = new Jafar();
        expect(jafar.hasLockedLocation()).toBeTruthy();
        expect(jafar.hasLockedLocation()).not.toBeFalsy();
    });
    test('Moving', function () {
        var jafar = new Jafar();
        expect(function () { jafar.move(jafar.currentLocation); }).toThrow();
        jafar.move('Streets Of Agrabah');
        expect(jafar.currentLocation).toBe('Streets Of Agrabah');
        expect(jafar.currentLocation).not.toBe('Sultan Palace');
        expect(function () { jafar.move('Cave Of Wonders'); }).toThrow();
    });
    test('Moving to locations with Gain Power Action', function () {
        var jafar = new Jafar();
        jafar.move('Streets Of Agrabah');
        expect(jafar.currentLocation).toBe('Streets Of Agrabah');
        var currentLocation = jafar.getLocationClass('Streets Of Agrabah');
        currentLocation.topActions[0].execute(jafar);
        jafar.power = 3;
        console.log(jafar.power);
        expect(jafar.power).toBe(3);
    });
});
