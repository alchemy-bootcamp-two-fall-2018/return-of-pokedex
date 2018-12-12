<template>
    <section>
        <ul>
            <Pokemon v-for="pokemon in pokemons"
            v-bind:key="pokemon.pokemon"
            v-bind:pokemon="pokemon"
            v-on:click.native="onSelect(pokemon), show = true"
            v-bind:class="{ pokemon: true, selected: pokemon === selected }"
            />
        </ul>
    </section>
</template>

<script>
import Pokemon from './Pokemon.vue';

export default {
  props: {
    pokemons: Array,
    onSelect: Function,
    selected: Object
  },
  components: {
    Pokemon
  }
};
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        list-style-type: none;
        margin: 0px 20px;
        padding: 0;
    };

</style>