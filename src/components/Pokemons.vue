<template>
<div>
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
         v-bind:pokemon="pokemon"/>
</transition-group>
</div>
</template>

<script>
import Pokemon from './Pokemon.vue';


export default {
  props: {
    pokemons: Array
  },
  components: {
    Pokemon,
    
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
          { opacity: 1, height: '400px' },
          { complete: done }
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  }

</style>
