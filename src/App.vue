<template>
    <div id="app">
        <Header :filter="filter" />
        {{filter}}
        <Pokethem :pokethem="filteredPokethem" />
        {{pokethem}}
    </div>
</template> 

<script>
import pokethemApi from './services/pokethemApi.js';
// import Pokethem from './components/Pokethem';
import Header from './components/Header';

export default {
    data() {
        return {
            pokethem: pokethemApi.getPokethem(),
            filter: {
                attack: 0
            }
        };
    },
    components: {
        Header,
        // Pokethem
    },
    computed: {
        filteredPokethem() {
            return this.pokethem.filter(pokemon => {
                return pokemon.attack > this.filter.attack;
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
