<template>
  <li>
      <img v-bind:src="pokemon.url_image"/>
      <div class="info">
          <h3>{{ pokemon.pokemon}}</h3>
          <p>type-1: {{ pokemon.type_1 }}</p>
          <p>attack: {{ pokemon.attack }}</p>
          <p>defense: {{ pokemon.defense }}</p>
      </div>
  </li>
</template> 

<script>
export default {
    props: {
        pokemon:Object
    }
};
</script>

<style scoped>
li {
  position: relative;
  height: 300px;
  border: 1px solid black;
  background-color:cadetblue;
  text-shadow: 1px 1px 1px black;
}
img {
  /* position:absolute; */
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  z-index: -1;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}
.info {
  position:absolute;
  bottom:0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
}
h3, p {
  margin: 0;
}
</style>