<template>
  <div id="app">
<!-- creates place for the header component to be render and gives aka "binds" the filter method to the component -->
    <Header
    v-bind:filter="filter"
    v-bind:sort="sort"
    />
    <pokemonView
    :pokemon="this.selected"
    />

    <Pokemons 
    v-bind:pokemons="sorted" 
    :onSelect="handleSelect"
    />

  </div>
</template>

<script>
import Header from './components/Header.vue';
import PokemonApi from '../pokemonApi';
import Pokemons from './components/pokemons.vue';
import PokemonView from './components/pokemonView.vue';

export default {
 
    data() {
        return {
            pokemons: PokemonApi.getPokemon(), 
            filter: {
                name:'',
                type_1:'',
                attack:'',
                defense:''
            },
            selected: null,
            
            sort: {
                field: 'name',
                direction: 1,
            }
        };
    },
    components: {
        Header,
        Pokemons, 
        PokemonView
    },
    computed: {
        filtered(){
            return this.pokemons.filter(pokemon => {
                const hasName = !this.filter.name || pokemon.pokemon.includes(this.filter.name);
                const hasType = !this.filter.type_1 || pokemon.type_1.includes(this.filter.type_1 || this.filter.type_2);
                const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
                const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;


                return hasName && hasType && hasAttack && hasDefense;
            });
        },
        sorted() {
            const field = this.sort.field;
            const direction = this.sort.direction;
            return this.filtered.slice().sort((a, b)=> {
                if(a[field] > b[field]) {
                    return 1 * direction;
                }

                if(a[field] < b[field]) {
                    return -1 * direction;
                }
                return 0;
            });
        }
    },
    methods:{
        handleSelect(pokemon){
            this.selected = pokemon;
            console.log(this.selected);
        }
    }
};

</script>

<style>
/* .fadeSize-enter-active{
    size: 0%
}
.fadeSize-enter-to {
    size:100;
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
