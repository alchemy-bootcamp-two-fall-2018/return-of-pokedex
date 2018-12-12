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

<style scoped>
li {
  position: relative;
  height: 400px;
  /* min-width: 150px; */
}
img {
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  /* z-index: -1; */
  object-fit: cover;
}
.info {
  position: absolute;
  bottom: 0;
  width: 100%;
  b
  text-align: center;
}
</style>
