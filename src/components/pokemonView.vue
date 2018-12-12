<template>
       <li>
        <img v-bind:src="pokemon.url_image"/>  
        <div class="info">  
            <h2> {{pokemon.pokemon}}</h2>
            <div class="stats">
            <h5>Attack: {{pokemon.attack}}</h5>
            <h5>Defense: {{pokemon.defense}}</h5>
            <h5>Generation: {{pokemon.generation_id}} </h5>
            </div>

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
