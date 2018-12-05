import pokedex from './pokedex.js';

const types = [];
pokedex.forEach(pokemon => {
    const type = pokemon.type_1;

    if(!types.includes(type)) {
        types.push(type);
    }
});
export default {
    getPokemons() {
        return pokedex;
    },
    getTypes() {
        return types;
    }
};