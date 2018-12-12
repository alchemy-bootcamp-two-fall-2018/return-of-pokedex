<template>
  <transition-group name="staggered-fade" tag="ul">
    <Pokemon v-for="pokemon in pokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"
      v-bind:selected="selected"
      v-bind:onSelect="handleSelect"/>
  </transition-group>
</template>

<script>
import Pokemon from './Pokemon.vue';
// import PokemonDetail from './PokemonDetail.vue';

export default {
  data() {
    return {
      selected: null
    };
  },
  props: {
    pokemons: Array
  },
  components: {
    Pokemon
  },
  methods: {
    handleSelect(pokemon) {
      console.log('hello', pokemon.pokemon);
      this.selected = pokemon;
    }
  }
};
</script>

<style lang="postcss">

ul {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  list-style-type: none;
}

.staggered-fade {
  transition: transform 1s;
}
</style>
