"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jafar = require("../Villain/Jafar");
test('Jafar', function () {
    var jafar = new Jafar();
    describe('Attributes', function () {
        expect(jafar.name).toBe('Jafar');
        expect(jafar.realm.length).toBe(4);
    });
    describe('Methods', function () {
        expect(jafar.hasLockedLocation()).toBe(true);
        expect(jafar.hasLockedLocation()).not.toBe(false);
    });
});
