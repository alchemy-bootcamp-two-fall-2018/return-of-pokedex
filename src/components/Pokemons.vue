<template>
    <transition-group name="staggered-fade" 
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
</template>

<script>
      

import Pokemon from './Pokemon.vue';

export default {
    props: {
        pokemons: Array
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
            var delay = 300;
            setTimeout(function() {
                /* eslint-disable-next-line */
                Velocity(
                    el,
                    { opacity: 1, height: '275px' },
                    { complete: done }
                );
            }, delay);
        },
        leave: function(el, done) {
            var delay = 300;
            setTimeout(function() {
                /* eslint-disable-next-line */
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
      
<style scoped lang="postcss">
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-row-gap: 3px;
  background-color: silver;

}

.flip-list-move {
  transition: transform 1s;
}
      
</style>
      