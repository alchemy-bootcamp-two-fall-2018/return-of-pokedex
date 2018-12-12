<template>
  <li>
    <h3>{{ pokemon.pokemon }}</h3>
    <img v-bind:src="pokemon.url_image" />
  </li>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style scoped>
  li {
    position: relative;
    height: 350px;
    width: 350px;
    border: 5px solid;
    background: black;
    margin: 0px 10px;
  }
  img {
    width: 85%;
    height: 85%;
    z-index: 1;
    object-fit: cover;
    margin-top: -20px;
  }
  h3 {
    color: white;
    font-size: 1.3em;
  }
</style>
