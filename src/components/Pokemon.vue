<template>
    <li>
        <h3>{{ pokemon.pokemon }}</h3>
        <img v-bind:src="pokemon.url_image" />
        <button @click="show = true">View Details</button>
        <transition name="fade">
            <Modal v-if="show" v-bind:onClose="() => show = false">
                <div v-if="pokemon">
                    <img v-bind:src="pokemon.url_image" />
                <div class="info" v-bind:style="{ color: pokemon.color_1 }">
                <h3>{{ pokemon.pokemon }}</h3>
                    <p>Type 1: {{pokemon.type_1}}</p>
                    <p>Type 2: {{pokemon.type_2}}</p> 
                    <p>Attack: {{pokemon.attack}}</p>
                </div>
        </transition>
    </li>
</template>

<script>
import Modal from './Modal.vue';
export default {
    data() {
        return {
            show: false;
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

<style>
    li {
        position: relative;
        height: 300px;
        border: 2px solid rgb(243, 18, 18);
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
        height: 100px;
        background: rgba(255, 255, 255, 0.8);
        line-height: 1em;
    }
</style>