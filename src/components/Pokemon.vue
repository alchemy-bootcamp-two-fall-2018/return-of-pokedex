<template>
  <li class="card">
    <img :src="pokemon.url_image" class="side" />
    <button @click="show = !show">More Info</button>
    <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <Modal v-if="show" :onClose="() => show = false" :pokemon="pokemon">
        </Modal>
    </transition>
  </li>
</template>

<script>
import Modal from './Modal';
export default {
    props: {
        pokemon: Object,
    },
    components: {
        Modal
    },
    data() {
        return {
            show: false,
        };
    }

};
</script>

<style lang="postcss" scoped>
.card {
    background: #001f3f; 
    position: relative;
    box-shadow:0px 0px 0px 2px grey inset;
    margin-bottom:20px;
}
img {
    width: 200px;
    height: 200px;
}
li {
    list-style-type: none;
}
</style>
