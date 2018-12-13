<template>
  <div>
    <li v-on:click="onSelect(pokemon)">
        <img v-bind:src="pokemon.url_image">
        <h3>{{ pokemon.pokemon }}</h3>
        <!-- <p>Type 1: {{ pokemon.type_1 }}</p>
        <p>Type 2: {{ pokemon.type_2 }}</p>
        <p>Attack: {{pokemon.attack}}</p>
        <p>Defense: {{pokemon.defense}}</p> -->
        <button @click="showModal = true">Details</button>
    </li>

    <Modal v-if="showModal" :onClose="() => showModal = false" :pokemon="pokemon">
    </Modal>
  </div>


</template>

<script>
import Modal from './Modal';

export default {
  data() {
    return {
      showModal: false
    };
  },
  components: {
    Modal
  },
  props: {
    pokemon: Object,
    onSelect: Function
  }
};
</script>

<style>
img {
    width: 200px;
}
.info {
  border: 1px solid black;
}
</style>
