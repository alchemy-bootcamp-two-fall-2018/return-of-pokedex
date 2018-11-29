<template>
    <li>
        <img v-bind:src="pokedex.url_image" />
        <div class="info">
            <h3>{{ pokedex.pokemon }}</h3>
            <p>Type 1: {{ pokedex.type_1 }}</p>
            <p>Attack: {{ pokedex.attack }}</p>
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