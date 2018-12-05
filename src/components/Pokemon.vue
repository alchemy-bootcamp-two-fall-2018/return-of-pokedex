<template>
    <li>
        <div class="info">
            <h2>Name: {{ pokemon.pokemon }}</h2>
            <h3>Weight: {{ pokemon.weight }}</h3>
            <h3>Type: {{ pokemon.type_1}}</h3>
            <h3>Defense: {{ pokemon.defense }}</h3>
            <img v-bind:src="pokemon.url_image"/>
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
    width:150px;
}
li {
    border:solid 0.4px;
}
</style>
