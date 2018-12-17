<template>
  <section v-if="pokemon">
    <div class="pokemon-detail">
      <h2>
      <h3>height: {{ pokemon.height }}</h3>
      <p>weight: {{ pokemon.weight }}</p>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>