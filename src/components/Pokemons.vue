<template>
    <transition-group name="flip-list" tag="ul">
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
      