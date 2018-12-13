<template>
    <li class="imageli">
        <img v-bind:src="pokemon.url_image" />
        <div class="info">
            <h3>{{ pokemon.pokemon }}</h3>
            <p>Type 1: {{ pokemon.type_1 }}</p>
            <p>Type 2: {{ pokemon.type_2 }}</p>
            <p>Attack: {{ pokemon.attack }}</p>
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

<style scoped>

img {
    width: 50%;
    height: 50%;
    padding: 2px;
    border: 2px dotted black;    
    margin: 10px;
    margin-top: 20px;
    background-color: #bfbd9f;
}
.info {
    font-size: 0.60em;
    line-height: .42em;
}
</style>