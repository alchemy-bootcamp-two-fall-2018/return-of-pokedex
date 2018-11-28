<template>
    <li>
        <h3>{{pokemon.pokemon}}</h3>
        <img v-bind:src="pokemon.url_image">
        <div id="stats">
            <h4>Type 1: {{pokemon.type_1}}</h4>
            <h4>Type 2: {{pokemon.type_2}}</h4>
            <h4>ATK: {{pokemon.attack}}</h4>
            <h4>DEF: {{pokemon.defense}}</h4>
        </div>   
    </li>
</template>

<script>
export default {
    props: {
        pokemon: Object
    }
}
</script>

<style>
    img {
        width: 50px;
    }
    li {
        background: rgba(224,213,213, 0.7);
        border: 1px solid darkgreen;
        margin: 5px;
        padding: 1vw;
        width: 200px;
    }
</style>
