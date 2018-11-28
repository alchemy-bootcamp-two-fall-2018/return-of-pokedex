<template>
    <li>
        <img v-bind:src="pokemon.url_image"/>
        <h2>{{ pokemon.pokemon }} </h2>
        <p>type: {{ pokemon.type_1 }}</p>
    </li>
</template>
    
<script>
export default {
    props: {
        pokemon: Object
    }
};
</script>

<style scoped>
li {
    position: relative;
    height: 300px;
}
img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
