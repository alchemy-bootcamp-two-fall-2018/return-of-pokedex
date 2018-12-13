<template>
    <li class="card">
        
        <img v-bind:src="pokemon.url_image" class="side"/>
        <button @click="show = true">View Details</button>
        <transition name="fade">
            <Modal v-if="show" v-bind:onClose="() => show = false" :pokemon="pokemon">
            </Modal>
        </transition>
    </li>
</template>

<script>
import Modal from './Modal.vue';
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
    .card {
    background: #001f3f; 

    box-shadow:0px 0px 0px 2px grey inset;
    margin-bottom:20px;
    }
    
    img {
        
        top: 0;
        left: 30px;
        width: 200px;
        height: 200px;
    }
    li {
        list-style-type: none;
    }

    @media (max-width: 375px) {
        img {
            width: 150px;
            height: 150px;
        }
    }
    h3 {
        color: white;
        font-size: 1.3em;
    }

    fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .5s ease-in-out;
    }
    .fade-enter, .fade-leave-active {
    opacity: 0
    }
    
</style>
