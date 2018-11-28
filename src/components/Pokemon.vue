<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <div class="info">
            <h3>{{ pokemon.pokemon }}</h3>
            <p>type: {{ pokemon.type_1 }}</p>
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
