pokedex.js list - getPokemons() returns pokedex

Header.vue - uses filter.type1, filter.type2, filter.attack, sort.field.pokemon

Pokemon.vue - uses pokemon.url_image, pokemon.pokemon, pokemon.type_1, pokemon.attack
              export default { props: pokemon: Object }

Pokemons.vue - uses v-for pokemon in pokemons, v-bind:key="pokemon.pokemon", v-bind:pokemon="pokemon",
               import Pokemon from './Pokemon.vue';
               export default {
                  props: {
                     pokemons: Array,
                  components: {
                     Pokemon

App.vue - uses v-bind:pokemons="pokemons", 
          import pokedex from './services/pokedex.js';
          import Pokemons from './components/Pokemons.vue';
          import Header from './components/Header.vue';  
          export default {
    data() {
        return {
            pokemons: pokedex.getPokemons(),
            filter: {
                type1: '',
                type2: '',
                attack: 0
            sort: {
                field: 'pokemon',
    components: {
        Header,
        Pokemons
    computed: {
        filteredPokemons() {
            return this.pokemons.filter(pokemon => {
                const hasType1 = pokemon.type1 === this.filter.type1;
                const hasType2 = pokemon.type2 === this.filter.type2;
                const hasAttack = pokemon.attack >= this.filter.attack;
                return hasType1 && hasType2 && hasAttack;
        sortedPokemons() {
            const field = this.sort.pokemon;
            return this.filteredPokemons.slice().sort((a, b) => {
                if(a[field] > b[field]) {
                    return 1;
                if(a[field] < b[field]) {
                    return -1;
                return 0; 