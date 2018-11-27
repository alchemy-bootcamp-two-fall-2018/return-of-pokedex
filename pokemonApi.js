import Pokemon from './pokedex.js';
// types =[];
// seen =[];
// pokemon.forEach(pokemon => {
//   const type = pokemon.type;
//   if(seen[type]) {
//     return;
//   }


//   types.push(type)
//   seen[type]= true;
// })

export default {
    getPokemon() {
        return Pokemon;
    }
};