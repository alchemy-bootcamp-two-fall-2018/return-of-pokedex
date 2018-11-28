<template>
  <div id="app"> 
    <Header 
        v-bind:filter="filter"
        v-bind:types="pokemonTypes"
        v-bind:abilities="pokemonAbility"/>
        
    <Pokemons v-bind:pokemons="filteredPokemons"/>
  </div>
</template>

<script>
import pokemons from '../pokedex.js'; 
import Pokemons from './components/Pokemons.vue'; 
import Header from './components/Header.vue'; 

export default {
    data() {
        return {
            pokemons,
        
            filter: {
                name:'', 
                type: '',
                ability: ''
            }
        }; 
    },
    components: {
        Header,
        Pokemons
    },
    computed: {
        pokemonTypes() {
            const types = []; 
            this.pokemons.forEach(pokemon => {
                if(!types.includes(pokemon.type_1)) {
                    types.push(pokemon.type_1);
                }
            }); 
            return types;
        }, 
        pokemonAbility() {
            const abilities = [];
            this.pokemons.forEach(pokemon => {
                if(!abilities.includes(pokemon.ability_1)) {
                    abilities.push(pokemon.ability_1); 
                }
            });
            return abilities;
        }, 
        filteredPokemons() {
            return this.pokemons.filter(pokemon => { 
                const hasType = !this.filter.type || pokemon.type_1 === this.filter.type;
                const hasAbility = !this.filter.ability || pokemon.ability_1 === this.filter.ability;
                const hasName = !this.filter.name || pokemon.pokemon.includes(this.filter.name);  
                return hasType && hasAbility && hasName; 
            }); 
        }
    }
};
</script>