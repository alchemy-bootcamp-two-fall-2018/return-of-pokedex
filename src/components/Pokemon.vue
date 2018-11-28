<template>
  <li class="card">
    <img v-bind:src="pokemon.url_image" class="side" />
    <div class="info" v-bind:style="{ color: pokemon.color_1 }">
      <h3 class="pokemon-name">{{ pokemon.pokemon }}</h3>
      <p>Type 1: {{ pokemon.type_1 }}</p>
      <p>Type 2: {{ pokemon.type_2 }}</p>
      <p>Hit Points: {{ pokemon.hp }}</p>
      <p>Defense: {{ pokemon.defense }}</p>
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
    .pokemon-name {
        text-transform: capitalize;
    }
    .card {
       background: #001f3f; 
       transform-style: preserve-3d;
       transition: all 1s ease-in-out;
       position: relative;
    }
    .card:hover {
        transform: rotateY(180deg);
    }
    .card .side {
        backface-visibility: hidden;
    }
    .card .info {
        transform: rotateY(180deg);
    }
    .info {
        justify-content: center;
        position: absolute;
        top: -5px;
        width: 100%;
    }
</style>
