<template>
  <div id="app">
    {{pokethem}}
    <!-- <Pokethem /> -->
  </div>
</template> 

<script>
// import Pokethem from './components/Pokethem';
import pokethemApi from './services/pokethemApi.js';


export default {
    data() {
        return {
            pokethem: pokethemApi.getPokethem(),
        };
    },
    name: 'app',
    components: {
        // Pokethem
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
