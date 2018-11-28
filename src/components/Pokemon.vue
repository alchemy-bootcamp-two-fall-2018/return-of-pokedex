<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <div class="info" v-bind:style="{ color: pokemon.color_1 }">
            <h3>{{ pokemon.pokemon }}</h3>
            <p>Type 1: {{pokemon.type_1}}</p>
            <p>Type 2: {{pokemon.type_2}}</p> 
            <p>Attack: {{pokemon.attack}}</p>
            <p>Defense: {{pokemon.defense}}</p>
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
    li {
        position: relative;
        height: 400px;
        border: 2px solid black;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
    }
    .info {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 130px;
        background: rgba(255, 255, 255, 0.8);
        line-height: 0.4em;
    }

    

</style>
