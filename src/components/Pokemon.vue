<template>
    <li class="grid">
        <div id="card">
            <h2>{{pokemon.pokemon}}</h2>
            <img v-bind:src="pokemon.url_image">
            <h4>Type 1: {{pokemon.type_1}}</h4>
            <h4>Type 2: {{pokemon.type_2}}</h4>
            <h4>Attack: {{pokemon.attack}}</h4>
            <h4>Defense: {{pokemon.defense}}</h4>
        </div>
        <span>
            <button @click="show = true">Details</button>
            <Modal :pokemon="pokemon" v-if="show" :onClose="() => show = false">    
            </Modal>
        </span>
    </li>
</template>

<script>
import Modal from './Modal';

export default {
  props: {
    pokemon: Object
  },
  components: {
    Modal
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
    img {
        width: 100px;
    }

    li {
        text-align: center;
        border: 1px solid black;
        box-shadow: 5px 10px 10px grey;
        padding: 30px;
    }

    h4 {
        padding: 0px;
        margin: 0px;
    }

</style>


