<template>
  <div v-if="pokemon">
    
    <h2>Your Pokemon:</h2>
    <h2>{{pokemon.pokemon}}</h2>
    <h3>Types:{{pokemon.type_1}}, {{pokemon.type_2}}</h3>
    <h3>Weight:{{pokemon.weight}}</h3>
    <h3>Height:{{pokemon.height}}</h3>
    
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
div {
  text-align: center;
}
</style>
