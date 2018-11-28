<template>
    <li>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">        
        <ul>
        <h3>{{pokemon.pokemon}}</h3>
        <img v-bind:src="pokemon.url_image">
        <div id="stats">
            <h4>Type 1: {{pokemon.type_1}}</h4>
            <h4>Type 2: {{pokemon.type_2}}</h4>
            <h4>ATK: {{pokemon.attack}}</h4>
            <h4>DEF: {{pokemon.defense}}</h4>
        </div>  
        </ul> 
    </li>
</template>

<script>
export default {
    props: {
        pokemon: Object
    }
}
</script>

<style>
    img {
        width: 120px;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        grid-gap: 8px;
        object-fit: cover;
        border: solid black;
        background-color: tan;
        font-family: 'Press Start 2P', cursive;  
        font-size: 15px;

    }
</style>