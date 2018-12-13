<template>
    <div>
        <Modal 
        v-if="show"
        :onClose="onClose"
        :pokemon="pokemon"
        />
        <li @click="handleClick" :style=" { background: pokemon.color_1 }">
            <img v-bind:src="pokemon.url_image">
            <h3>{{pokemon.pokemon}}</h3>
        </li>
    </div>
</template>

<script>
import Modal from './Modal';
export default {
    data() {
        return {
            show: false
        }
    },
    props: {
        pokemon: Object,
    },
    methods: {
        handleClick() {
            this.show = true;
        },
        onClose() {
            this.show = false;
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
    img {
        width: 100%;
    }
    li {
        border: 1px solid darkgreen;
        margin: 5px;
        padding: 1vw;
        width: 200px;
        display: flex;
        flex-direction: column;
        text-align: center;
        border-radius: 10px;
    }
    h3 {
        background-color: antiquewhite;
        border: 4px outset gray;
    }
</style>
