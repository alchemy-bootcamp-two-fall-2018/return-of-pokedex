<template>
    <li>
        <h3>{{pokemon.pokemon}}</h3>
        <img v-bind:src="pokemon.url_image">
        <div id="info">
            <h4>Type: {{pokemon.type_1}}</h4>
            <h4>Attack: {{pokemon.attack}}</h4>
            <h4>Defense: {{pokemon.defense}}</h4>
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


</style>


