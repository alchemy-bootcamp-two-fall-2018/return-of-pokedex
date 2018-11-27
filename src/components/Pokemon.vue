<template>
    <li>
        <img v-bind:src="pokemon.url_image">
        <div id="info">
            <h4>Name: {{pokemon.pokemon}}</h4>
            <h4>Type: {{pokemon.type_1}}</h4>
            <h4>Attack: {{pokemon.attack}}</h4>
            <h4>Defense: {{pokemon.defense}}</h4>
        </div>
    </li>
</template>

<script>
export default {

};
</script>

<style>

.pokemon {
    border: 1px solid black;
    width: 200px;
}

li {
  position: relative;
  height: 300px;
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
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
}
h3, p {
  margin: 0;
}

</style>


