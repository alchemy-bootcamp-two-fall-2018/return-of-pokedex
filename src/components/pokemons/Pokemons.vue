<!-- this page renders the grid -->
<!-- parent component -->

<template>
    <div>
        <Modal v-if="showModal" :onClose="() => showModal = false">
            <PokemonDetail :pokemon="selected"/>
        </Modal>
        <ul>
            <Pokemon v-for="pokemon in pokemons"
                v-bind:key="pokemon.pokemon"
                v-bind:pokemon="pokemon"
                :onSelect="handleSelect"/>
        </ul>
    </div>
</template>

<script>
import Pokemon from './Pokemon.vue';
import PokemonDetail from './PokemonDetail.vue';
import Modal from '../Modal.vue';

export default {
    data() {
        return {
            selected: null,
            showModal: false
        };
    },
    props: {
        pokemons: Array
    },    
    components: {
        Pokemon,
        PokemonDetail,
        Modal
    },
    methods: {
        handleSelect(pokemon) {
            this.selected = pokemon;
            this.showModal = true;
        }
    }

};
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>
