<template>
  <div id="app">
    <HelloWorld msg="Return of PokeDex"/>

    <header>
      <label>
        Name:
      <input type="text">
      </label>
      <label>
        Type:
      <input type="text">
      </label>
      <label>
        Hit Points:
      <input type="number">
      </label>
      <label>
        Defense:
      <input type="number">
      </label>
    </header>

    <div class="pokemonList">
        <div class="pokemon">
        <img :src="Pokedex[1].url_image">
        <p>{{Pokedex[1].pokemon}}</p>
        </div>
        <div class="pokemon">
        <img :src="Pokedex[2].url_image">
        <p>{{Pokedex[2].pokemon}}</p>
        </div>
        <div class="pokemon">
        <img :src="Pokedex[3].url_image">
        <p>{{Pokedex[3].pokemon}}</p>
        </div>
        <div class="pokemon">
        <img :src="Pokedex[4].url_image">
        <p>{{Pokedex[4].pokemon}}</p>
        </div>
        <div class="pokemon">
        <img :src="Pokedex[5].url_image">
        <p>{{Pokedex[5].pokemon}}</p>
        </div>
        <div class="pokemon">
        <img :src="Pokedex[6].url_image">
        <p>{{Pokedex[6].pokemon}}</p>
        </div>
        <div class="pokemon">
        <img :src="Pokedex[7].url_image">
        <p>{{Pokedex[7].pokemon}}</p>
        </div>
        <div class="pokemon">
        <img :src="Pokedex[8].url_image">
        <p>{{Pokedex[8].pokemon}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Pokedex from '../pokedex.js';

export default {
    name: 'app',
    components: {
        HelloWorld
    },
    data() {
        return {
            Pokedex,
        };
    }
};
</script>

<style>
.pokemonList {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 10px;
}
header {
    margin: 40px;
}
img {
    width: 100px;
    height: 100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
