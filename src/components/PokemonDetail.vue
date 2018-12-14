<template>
  <div v-if="pokemon">
    <h2 >Pokemon Detail</h2>
    <img v-bind:src="pokemon.url_image"/>
    <p>Name: {{pokemon.pokemon}}</p>
    <p>Shape: {{pokemon.shape}}</p>
    <p>Egg Group 1: {{pokemon.egg_group_1}}</p>
    <p>Hidden Ability: {{pokemon.ability_hidden}}</p>
  </div>  
</template>

<script>
export default {
    props: {
        pokemon:Object
    }
};
</script>

<style scoped lang="postcss">
img {
  height: 50%;
  width: 50%;
}
p {
  font-size: 1.25em;
  font-weight: bolder;
  background-color: cadetblue;
  border-radius: 7px;
}
</style>
