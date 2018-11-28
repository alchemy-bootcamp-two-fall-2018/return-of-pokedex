<template>
    <li>
        <img v-bind:src="pokemon.url_image"/>
        <h2>{{ pokemon.pokemon }} </h2>
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
