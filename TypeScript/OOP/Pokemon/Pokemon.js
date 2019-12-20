"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, weight, height, type, ability, region) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.ability = ability;
        this.region = region;
    }
    Object.defineProperty(Pokemon.prototype, "info", {
        get: function () {
            return this.name + this.weight + this.height + this.type + this.ability + this.region;
        },
        enumerable: true,
        configurable: true
    });
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var Pikachu = new Pokemon('Pikachu', 6.0, 0.4, ['Electric'], ['Static', 'Lightning Rod'], 'Kanto');
console.log(Pikachu.info);
