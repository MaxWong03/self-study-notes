export class Pokemon {
    constructor(name, weight, height, type, ability, region) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.ability = ability;
        this.region = region;
    }
    get info() {
        return this.name + this.weight + this.height + this.type + this.ability + this.region;
    }
}
const Pikachu = new Pokemon('Pikachu', 6.0, 0.4, ['Electric'], ['Static', 'Lightning Rod'], 'Kanto');
console.log(Pikachu.info);
