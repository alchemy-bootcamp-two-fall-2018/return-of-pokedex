<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <div class="info">
            <h3>{{ pokemon.pokemon }}</h3>
            <p>type 1: {{ pokemon.type_1 }}</p>
            <p>type 2: {{ pokemon.type_2 }}</p>
            <p>attack: {{ pokemon.attack }}</p>
            <p>defense: {{ pokemon.defense }}</p>
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
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>
