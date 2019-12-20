export class Pokemon {
  name: string;
  weight: number;
  height: number;
  type: Array<string>;
  ability: Array<string>;
  region: string;

  constructor(name: string, weight: number, height: number, type: Array<string>, ability: Array<string>, region: string) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.ability = ability;
    this.region = region;
  }
}






