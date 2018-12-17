<template>
    <li>
      <h3>{{ pokemon.pokemon }}</h3>
      <img v-bind:src="pokemon.url_image" />
      <button @click="show = true">View Details</button>
      <transition name="fade">
        <Modal v-if="show" v-bind:onClose="() => show = false">
          <div v-if="pokemon">
            <img class="pics" v-bind:src="pokemon.url_image" />
            <h3>{{ pokemon.pokemon }}</h3>
            <p>Type 1: {{pokemon.type_1}}</p>
            <p>Type 2: {{pokemon.type_2}}</p> 
            <p>Attack: {{pokemon.attack}}</p>
            <p>Defense: {{pokemon.defense}}</p>
          </div>
        </Modal>
      </transition>
    </li>
</template>

<script>
import Modal from './Modal.vue';
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    pokemon: Object
  },
  components: {
    Modal
  }
};
</script>

<style scoped lang="postcss">
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid navy;
    box-shadow: 4px 4px 4px black;
    background: black;
    margin: 0px 10px;
    h3 {
      color: white;
      font-size: 1.3em;
      margin-top: 3px;
    }
    img {
      width: 50%;
      height: 50%;
      z-index: 1;
      margin-top: -20px;
    }
    button {
      margin-bottom: 5px;
    }
  }
 .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .5s ease-in-out;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .pics {
    margin-top: 10px;
    margin-bottom: -40px;
  }
</style>
