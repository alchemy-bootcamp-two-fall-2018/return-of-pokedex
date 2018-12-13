<template>
  <div v-if="pokemon">
    <h2>Your Pokemon</h2>
    {{pokemon.pokemon}}
    <!-- <img v-bind:src="pokemon.url_image"> -->


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
img {
  
}
</style>
