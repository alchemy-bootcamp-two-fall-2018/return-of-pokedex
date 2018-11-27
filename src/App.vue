<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'app',
    components: {
        HelloWorld
    }
};
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


// Top-level container. Mediate between Filter/Sort in Header and Results.
// App will need to own the data:

// pokedex
// filter/sort
// And have a set of computed properties for applying the filter and the sort (the result of which will be passed to Pokedex)
