<template>
    <li>
        <div>
            <img :src="pokemon.url_image"/>
            <h3>{{pokemon.pokemon}}</h3>
            
        <button @click="showModal = true">Read More</button>
        </div>
        <Modal v-if="showModal" :onClose="() => showModal = false" :pokemon="pokemon">
        </Modal>
    </li>
</template>

<script>
import Modal from './Modal.vue';
export default {
    data() {
        return {
            showModal: false
        };
    },
    props: {
        pokemon: Object,
        onSelect: Function
    },
    components: {
        Modal
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
  object-fit: cover;
}

</style>
