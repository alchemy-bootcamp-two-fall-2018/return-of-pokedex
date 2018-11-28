import pokemons from './pokedex.js';

const types = [];

pokemons.forEach(pokemon => {
    const type1 = pokemon.type_1;
    const type2 = pokemon.type_2;
    
    if(types.includes(type1) !== true) {
        types.push(type1);
    }
    else if(types.includes(type2) !== true) {
        types.push(type2);
    }
    else {
        return;
    }
});

export default {
    getPokemons() {
        return pokemons;
    },
    getTypes() {
        return types;
    }
};