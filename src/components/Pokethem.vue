<template>
    <ul>
        <Pokemon v-for="pokemon in pokethem"
            :key="pokemon.pokemon"
            :pokemon="pokemon"/>
    </ul>
</template>

<script>
import pokethemApi from '../services/pokethem.Api';
import Pokemon from './Pokemon';

export default {

};
</script>

<style>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    list-style-type: none;
    margin:0;
    padding: 0;
}
</style>
