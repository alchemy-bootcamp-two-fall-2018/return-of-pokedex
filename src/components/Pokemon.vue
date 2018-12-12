<template>
    <div>
        <Modal v-if="show"
        :onClose="onClose"
        :pokemon="pokemon"
        />
        <li @click="handleClick">
            <h3>{{pokemon.pokemon}}</h3>
            <img v-bind:src="pokemon.url_image">
            <div id="stats">
                <h4>Type 1: {{pokemon.type_1}}</h4>
                <h4>Type 2: {{pokemon.type_2}}</h4>
                <h4>ATK: {{pokemon.attack}}</h4>
                <h4>DEF: {{pokemon.defense}}</h4>
            </div>
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
            console.log(this.pokemon);
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
        background: rgba(224,213,213, 0.7);
        border: 1px solid darkgreen;
        margin: 5px;
        padding: 1vw;
        width: 200px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }   
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
