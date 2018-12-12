<template>
    <ul>
        <li v-for="poke in pokemons"
            v-bind:key="poke.name">
            <p><img v-bind:src="poke.url_image"></p>
            <p>Name: {{poke.pokemon}}</p>
            <p>Type: {{poke.type_1}}</p>
            <p>Egg Group: {{poke.egg_group_1}}</p>
            <p>Weight: {{poke.weight}}</p>
            <p>Height: {{poke.height}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        pokemons: Array
    }
};
</script>

<style>
    img {
        width: 100px;
    }

    li {
        list-style: none;
        display: inline-block;
        border: 1px solid red;
        padding: 2%;
        margin: 1%;
    }
</style>
