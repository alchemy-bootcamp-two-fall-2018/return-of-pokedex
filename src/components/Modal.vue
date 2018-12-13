<template>
  <div>
    <p>Type 1: {{ pokemon.type_1 }}</p>
    <p>Type 2: {{ pokemon.type_2 }}</p>
    <p>Attack: {{pokemon.attack}}</p>
    <p>Defense: {{pokemon.defense}}</p>
  </div>
</template>

<script>

export default {
  props: {
    pokemon: Object
  }
};
</script>

<style>

</style>
