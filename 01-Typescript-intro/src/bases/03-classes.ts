import axios from "axios";
import { Move, PokeapiResponse } from "./Interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }
  constructor(public readonly id: number, public name: string) {}

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
    this.speak();
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    return data.moves;
  }
}

export const charmander = new Pokemon(4, "Charmander");
// console.log(charmander.imageUrl);

// charmander.id = 10
// charmander.name = "new Charmander";
// charmander.scream();
// console.log(charmander.getMoves());
charmander.getMoves();
