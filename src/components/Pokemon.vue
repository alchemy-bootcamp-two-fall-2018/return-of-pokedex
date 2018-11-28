<template>
    <li>
        <h3>{{pokemon.pokemon}}</h3>
        <img v-bind:src="pokemon.url_image">
        <div id="stats">
            <h4>Type: {{pokemon.type_1}}</h4>
            <h4>ATK: {{pokemon.attack}}</h4>
            <h4>DEF: {{pokemon.defense}}</h4>
        </div>   
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
        width: 50px;
    }
    
 </style>