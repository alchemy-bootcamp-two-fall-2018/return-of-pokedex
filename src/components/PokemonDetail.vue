<template>
  <div v-if="pokemon">
    <h2>Your Pokemon</h2>
    {{pokemon.pokemon}}


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
