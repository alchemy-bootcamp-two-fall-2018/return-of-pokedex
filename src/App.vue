<template>
  <div id="app">
      <PokeFilter v-bind:onSearch="handleTextSearch"/>
      <NumFilter v-bind:onNum="handleNumSearch"/>
      <PokeSort v-bind:onSort="handleSort" />
      <Tile v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemons from './pokedex.js';
import PokeFilter from './components/Filter.vue';
import NumFilter from './components/NumFilter.vue';
import PokeSort from './components/Sort.vue';
import Tile from './components/Tile.vue';

// allow for double filtering
// fix number filter on backspace

export default {
    data() {
        return {
            pokemons,
        };
    },
    components: {
        PokeFilter,
        NumFilter,
        PokeSort,
        Tile
    },
    methods: {
        handleTextSearch(filterInput) {
            this.pokemons = pokemons.filter(poke => {
                return poke[filterInput.chosen].includes(filterInput.txt);
            });
        },
        handleNumSearch(filterInput) {
            this.pokemons = this.pokemons.filter(poke => {
                return poke[filterInput.chosen] >= filterInput.input;
            });
        },
        handleSort(sortFilter) {
            let comp;
            function compare(a, b) {
                return a - b;
            }
            if(sortFilter) {
                if(sortFilter === 'pokemon') {
                    comp = undefined;
                } else if(sortFilter === 'weight') {
                    comp = compare;
                }
                this.pokemons = pokemons.map(poke => {
                    return poke[sortFilter];
                }).sort(comp).map(val => {
                    return pokemons[pokemons.findIndex(poke => poke[sortFilter] === val)];
                });
            } else {
                this.pokemons = pokemons;
            }
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
