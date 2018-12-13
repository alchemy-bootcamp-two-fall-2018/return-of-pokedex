<template>
    <div>
        <transition name="slide-fade">
            <Modal v-if="showModal" :onClose="() => showModal = false">
            <PokemonDetail :pokemon="selected"/>
            </Modal>
        </transition>  
        <transition-group name="staggered-fade" 
            tag="ul"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            >
        <Pokemon v-for="pokemon in pokemons"
            v-bind:key="pokemon.pokemon"
            v-bind:pokemon="pokemon"
            :onSelect="handleSelect"/>
        </transition-group>        
    </div>
</template>

<script>
      
import Modal from './Modal';
import Pokemon from './Pokemon';
import PokemonDetail from './PokemonDetail';

export default {
    data() {
        return {
            pokemon: null,
            selected: null,
            showModal: false
        };
    },
    props: {
        pokemons: Array
    },
    components: {
        Pokemon,
        Modal,
        PokemonDetail
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function(el, done) {
            var delay = 300;
            setTimeout(function() {
                /* eslint-disable-next-line */
                Velocity(
                    el,
                    { opacity: 1, height: '275px' },
                    { complete: done }
                );
            }, delay);
        },
        leave: function(el, done) {
            var delay = 300;
            setTimeout(function() {
                /* eslint-disable-next-line */
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                );
            }, delay);
        },
        handleSelect(pokemon) {
            this.selected = pokemon;
            this.showModal = true;
            console.log('Was clicked') ;  
        }
    }
};
</script>
      
<style scoped lang="postcss">
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-row-gap: 3px;
  background-color: silver;

}

/* .flip-list-move {
  transition: transform 1s;
} */

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
      
</style>
      