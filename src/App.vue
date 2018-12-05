<template>
    <div id="app">
        <Header
            :filter="filter"
            :sort="sort"
            :types="pokemonTypes" />

        <Pokethem :pokethem="sortedPokethem" />
    </div>
</template> 

<script>
import pokethemApi from './services/pokethemApi.js';
import Pokethem from './components/Pokethem';
import Header from './components/Header';

export default {
    data() {
        return {
            pokethem: pokethemApi.getPokethem(),
            filter: {
                pokemon: '',
                type_1: '',
                attack: '',
                defense: ''
            },
            sort: {
                field: 'pokemon',
                direction: 1
            },
        };
    },

    components: {
        Header,
        Pokethem
    },

    computed: {
        pokemonTypes() {
            const types = [];
            this.pokethem.forEach(pokemon => {
                if(!types.includes(pokemon.type_1)) {
                    types.push(pokemon.type_1);
                }
            });
            return types;
        },
        filteredPokethem() {
            return this.pokethem.filter(pokemon => {
                const hasName = !this.filter.pokemon || pokemon.pokemon >= this.filter.pokemon;
                const hasType1 = !this.filter.type_1 || pokemon.type_1 === this.filter.type_1;
                const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
                const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;

                return hasName && hasType1 && hasAttack && hasDefense;
            });
        },
        sortedPokethem() {
            const field = this.sort.field;
            const direction = this.sort.direction;

            return this.filteredPokethem.slice().sort((a, b) => {
                if(a[field] > b[field]) {
                    return 1 * direction;
                }

                if(a[field] < b[field]) {
                    return -1 * direction;
                }

                return 0;
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
    text-align: left;
    color: #2c3e50;
}
</style>
