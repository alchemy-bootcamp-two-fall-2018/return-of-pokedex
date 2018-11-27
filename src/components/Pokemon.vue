<template>
    <div class="info">
    <li>
            <img v-bind:src="pokemon.url_image"/>
            <h3> {{ pokemon.pokemon }}</h3>
            <p> type: {{pokemon.type_1}}
            <p> ability: {{ pokemon.ability_1}}</p>
            <p> attack: {{ pokemon.attack}}</p>
            <p> weight: {{ pokemon.weight}}</p>
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
  position: relative;
  /* height: 50px; */
}
img {
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  z-index: -1;
  object-fit: cover;
}
/* .info {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px; 
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
} */
h3, p {
  margin: 0;
}
li {
    border: 1px solid red;
    margin: 10px;
}
</style>