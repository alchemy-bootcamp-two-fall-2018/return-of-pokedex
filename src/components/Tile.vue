<template>
    <table>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Egg Group</th>
            <th>Weight</th>
            <th>Height</th>
        </tr>
        <tr v-for="poke in pokemons"
            v-bind:key="poke.name">
            <td><img v-bind:src="poke.url_image"></td>
            <td>{{poke.pokemon}}</td>
            <td>{{poke.type_1}}</td>
            <td>{{poke.egg_group_1}}</td>
            <td>{{poke.weight}}</td>
            <td>{{poke.height}}</td>
        </tr>
    </table>
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
    table {
        border: 2px solid black;
        margin: auto;
    }
</style>
