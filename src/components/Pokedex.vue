<template>
  <section>
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
      v-on:click.native="onSelect(pokemon), show = true"
      v-bind:class="{ pokemon: true, selected: pokemon === selected }"
      />
    </transition-group>
  </section>
</template>

<script>
import Pokemon from './Pokemon.vue';
export default {
  props: {
    pokemons: Array,
    onSelect: Function,
    selected: Object
  },
  components: {
    Pokemon
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        /*eslint-disable-next-line*/
        Velocity(
          el,
          { opacity: 1, height: '350px' },
          { complete: done },
          { duration: 300 }
        );
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
      /*eslint-disable-next-line*/
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done },
          { duration: 300 }
        );
      }, delay);
    }
  }
};
</script>

<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-column-gap: 35px;
  grid-row-gap: 15px;
  list-style-type: none;
  padding: 0;
};
</style>