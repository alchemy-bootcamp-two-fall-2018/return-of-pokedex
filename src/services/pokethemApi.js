import pokedex from './pokedex.js';

const types = [];

// pokedex.forEach(pokemon => {
//     const type = pokemon.type;

//     if(types.includes(type)) {
//         return;
//     }
// });

export default {
    getPokethem() {
        console.log('hi');
        return pokedex;
    },
    getTypes() {
        return types;
    }
};