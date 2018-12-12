<template>
  <div>
    <li v-on:click="onSelect(pokemon)">
        <img v-bind:src="pokemon.url_image">
        <h3>{{ pokemon.pokemon }}</h3>
        <p>Type 1: {{ pokemon.type_1 }}</p>
        <p>Type 2: {{ pokemon.type_2 }}</p>
        <p>Attack: {{pokemon.attack}}</p>
        <p>Defense: {{pokemon.defense}}</p>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object,
    onSelect: Function
  }
};
</script>

<style>
img {
    width: 200px;
}
.info {
  border: 1px solid black;
}
</style>
