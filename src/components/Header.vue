<template>
    <header>
        <h1>Pokedex</h1>
       <label>
           Name:
           <input v-model="filter.pokemon" type="text">
       </label>
       <label>
           Attack:
           <input v-model.number="filter.attack" type="number" step="10">
       </label>

       <label>
           Type:
           <select v-model="filter.type">
               <option value="">All</option>
               <option v-for="type in types"
                   v-bind:key="type"
                   v-bind:value="type">
               {{ type }}
               </option>
           </select>
       </label>
*********
        <!-- <label>
            Type 1:
            <input type="text"
                v-model.lazy="filter.type1">
        </label>

        <label>
            Type 2:
            <input type="text"
                v-model.lazy="filter.type1">
        </label>
        <label>
            Attack:
            <input type="number"
                v-model.number="filter.attack">
        </label> -->
*******
        <label>
            Sort By Name:
            <select v-model="sort.field">
                <options value="all"></options>
                <options value="pokemon"></options>
                <options value="type_1"></options>
                <options value="attack"></options>
            </select>
        </label>
    </header>
</template>

<script>
import pokemonApi from '../services/pokemonApi.js';

export default {
    data() {
        return {
            types: pokemonApi.getTypes()
        };
    },
    props: {
        filter: Object,
        sort: Object
    }
};
</script>

<style scoped>
header {
    background: greenyellow;
    color: black;
    padding: 10px;
    display: flex;
}
</style>