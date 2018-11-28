<template>
  <div id="app">
    <Header />
    {{pokethem}}
    <!-- <Pokethem /> -->
  </div>
</template> 

<script>
// import Pokethem from './components/Pokethem';
import pokethemApi from './services/pokethemApi.js';
import Header from './components/Header';


export default {
    data() {
        return {
            pokethem: pokethemApi.getPokethem(),
        };
    },
    name: 'app',
    components: {
        Header,
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
