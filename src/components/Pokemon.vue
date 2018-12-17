
<template>
  <li
  v-bind:key="pokemon.pokemon"
  >
    <button @click="show = true">Details</button>
    <Modal v-if="show" :onClose="() => show = false">
    <PokemonDetail :pokemon = "pokemon"/>
    </Modal>
    <img v-bind:src="pokemon.url_image"/>
    <div class="info">
      <h3>{{ pokemon.pokemon }}</h3>
      <p>attack: {{ pokemon.attack }}</p>
      <p>defense: {{ pokemon.defense }}</p>
      <p>health: {{ pokemon.hp }}</p>
    </div>
  </li>
</template>

<script>
import PokemonDetail from './PokemonDetail';
import Modal from './Modal';

export default {
  props: {
    pokemon: Object
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    PokemonDetail,
    Modal
  }
};
</script>

<style scoped lang="postcss">

li {
  position: relative;
  height: 300px;
  &:hover {
  img {
    transform: scale(1.3);
  }
}
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
