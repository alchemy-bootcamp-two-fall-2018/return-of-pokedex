<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <div class="info">
            <h3>{{ pokemon.name }}</h3>
            <p>Type 1: {{ pokemon.type1 }}</p>
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

</style>