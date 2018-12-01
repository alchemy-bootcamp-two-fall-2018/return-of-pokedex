import pokemons from '../assets/pokedex';


const types = [];
//const seen = {};

pokemons.forEach(pokemon => {
  const type = pokemon.type;
  if(types.includes(type)) {
    return;
  }
  types.push(type);
});

export default{
  getpokemons() {
    return pokemons;
  },
  getTypes(){
    return;
  }
};