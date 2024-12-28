export const pokemonsId = [1, 20, 30, 40, 50];

interface Pokemons {
  id: number;
  name: string;
  age?: 33;
}

export const renderPokemons: Pokemons = {
  id: 0,
  name: "",
};

export const pokemons: Pokemons[] = [];
pokemons.push(renderPokemons);
pokemonsId.push(+"3");

console.log("pokemons", pokemons);
console.log(pokemonsId);
