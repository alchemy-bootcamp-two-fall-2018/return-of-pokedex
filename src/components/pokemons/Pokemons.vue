<!-- this page renders the grid -->
<!-- parent component -->

<template>
    <div>
        <transition name="bounce">
            <Modal v-if="showModal" :onClose="() => showModal = false">
                <PokemonDetail :pokemon="selected"/>
            </Modal>
        </transition>

        <transition-group
            name="staggered-fade"
            tag="ul"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
        >
            <Pokemon v-for="pokemon in pokemons"
                :key="pokemon.pokemon"
                :pokemon="pokemon"
                :onSelect="handleSelect"/>
        
        </transition-group>
        
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
        },
        beforeEnter: function(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                /*eslint-disable-next-line*/
                Velocity(
                    el,
                    { opacity: 1, height: '300px' },
                    { complete: done }
                );
            }, delay);
        },
        leave: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                /*eslint-disable-next-line*/
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                );
            }, delay);
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
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
