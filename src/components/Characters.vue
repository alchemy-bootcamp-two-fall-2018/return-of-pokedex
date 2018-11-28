<template>
    <ul>
        <Character v-for="character in characters"
         v-bind:key="character.id"
         v-bind:pokemon="character"/>
  </ul>
</template>

<script>
import Character from './Character.vue';

export default {
  props: {
    characters: Array
  },
  components: {
    Character
  }
};
</script>


<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  }

</style>
