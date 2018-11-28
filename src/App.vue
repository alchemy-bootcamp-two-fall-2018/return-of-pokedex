<template>
  <div id="app">
    <Header
      v-bind:types="pokemonTypes"
      v-bind:filter="filter"
      v-bind:sort="sort"/>

    </Header>
  </div>
</template>

<script>
import Pokedex from'/components/Pokedex.vue';
import Header from '/componens/Head.vue';

export default {
  {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
