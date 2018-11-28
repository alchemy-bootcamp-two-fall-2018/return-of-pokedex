<template>
  <div id="app">
<!-- creates place for the header component to be render and gives aka "binds" the filter method to the component -->
    <Header
    v-bind:filter="filter"
    />


    <Pokemons v-bind:pokemons="filtered"/>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import PokemonApi from '../pokemonApi';
import Pokemons from './components/pokemons.vue';

export default {
 
    data() {
        return {
            pokemons: PokemonApi.getPokemon(), 
            filter: {
                name:'',
                type_1:'',
                attack:'',
                defense:''
            }
        };
    },
    components: {
        Header,
        Pokemons
    },
    computed: {
        filtered(){
            return this.pokemons.filter(pokemon => {
                const hasName = !this.filter.name || pokemon.pokemon.includes(this.filter.name);
                const hasType = !this.filter.type_1 || pokemon.type_1.includes(this.filter.type_1);
                const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
                const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;


                return hasName && hasType && hasAttack && hasDefense;
            });
        }
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
