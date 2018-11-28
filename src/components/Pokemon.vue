<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <div class="info">
            <h3>{{ pokemon.pokemon }}</h3>
            <p>Type 1: {{ pokemon.type_1 }}</p>
            <p>Type 2: {{ pokemon.type_2 }}</p>
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
img {
    width: 200px;
}
</style>
