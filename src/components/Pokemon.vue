<template>
  <li>
      <img v-bind:src="pokemon.url_image"/>
      <div class="info">
          <h3>{{ pokemon.pokemon}}</h3>
          <p>type-1: {{ pokemon.type-1 }}</p>
          <p>attack: {{ pokemon.attack }}</p>
      </div>
  </li>
</template> 

<script>
export default {
    props: {
        pokemon:Object
    }
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 300px;
}
</style>