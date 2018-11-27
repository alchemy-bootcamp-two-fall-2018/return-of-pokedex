<template>
    <li>
        <div class="info">
            <img v-bind:src="pokemon.url_image"/>
            <h3>{{pokemon.pokemon}}</h3>
            <p>Type 1: {{pokemon.type_1}}</p>
            <p>Type 2: {{pokemon.type_2}}</p>
            <p>Attack: {{pokemon.attack}}</p>
            <p>Defense:{{pokemon.defense}}</p>
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

</style>
