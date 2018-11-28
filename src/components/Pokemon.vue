<template>
  <li>
    <img v-bind:src="pokemon.url_image" />
    <div class="info" v-bind:style="{ color: pokemon.color_1 }">
      <h3 class="pokemon-name">{{ pokemon.pokemon }}</h3>
      <p>Type 1: {{ pokemon.type_1 }}</p>
      <p>Type 2: {{ pokemon.type_2 }}</p>
      <p>Hit Points: {{ pokemon.hp }}</p>
      <p>Defense: {{ pokemon.defense }}</p>
    </div>
  </li>
</template>

<script>
export default {
    props: {
        pokemon: Object
    }
};
</script>

<style>
    .pokemon-name {
        text-transform: capitalize;
    }
    body {
        background: #F0EAD6
    }
</style>
