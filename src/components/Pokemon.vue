<template>
    <div class="info" v-bind:style="{color:pokemon.color_1}">
    <li>
            <img v-bind:src="pokemon.url_image"/>
            <h3> {{ pokemon.pokemon }}</h3>
            <p> type: {{pokemon.type_1}}
            <p> ability: {{ pokemon.ability_1}}</p>
            <p> attack: {{ pokemon.attack}}</p>
            <p> weight: {{ pokemon.weight}}</p>
            <p> speed: {{ pokemon.speed }} </p>
    </li>
    </div>
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
  position:relative;
  text-align: center; 
} 
img {
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  z-index: -1;
  object-fit: cover;
  display: block;
  margin-left: auto; 
  margin-right: auto; 
}
h3, p {
  margin: 0;
}
li{
    border: 1px solid black;
    margin: 10px;
    background-color: grey; 
    text-shadow: 1px 1px 1px black;
}
</style>