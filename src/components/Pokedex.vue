<template>
  <transition-group 
    name="staggered-fade"
    tag="ul" 
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <Pokemon v-for="pokemon in pokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"
      v-bind:selected="selected"
      v-bind:onSelect="handleSelect"/>
  </transition-group>
</template>

<script>
import Pokemon from './Pokemon.vue';

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
      // console.log('hello', pokemon.pokemon);
      this.selected = pokemon;
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        //eslint-disable-next-line
        Velocity(
          el,
          { opacity: 1, height: '292px' },
          { complete: done }
        );
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        //eslint-disable-next-line
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        );
      }, delay);
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
