<template>
    <li>
        <h3>{{pokemon.pokemon}}</h3>
        <img v-bind:src="pokemon.url_image">
        <div id="card">
            <h4>Type 1: {{pokemon.type_1}}</h4>
            <h4>Type 2: {{pokemon.type_2}}</h4>
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
    img {
        width: 100px;
    }
    li {
        list-style: none;
        background: grey;
        width: 150px;
    }

</style>


