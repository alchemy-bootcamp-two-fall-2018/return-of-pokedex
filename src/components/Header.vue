<template>
    <header>
        <label>
            Name
            <input type="text"
                v-model="filter.name">
        </label>
        <label>
            Type
            <select v-model="filter.type">
                <option value="">All</option>
                <option
                    v-for="type in types"
                    v-bind:key="type"
                    v-bind:value="type">
                    {{type}}
                </option>   
            </select>
        </label>

        <label>
            Attack
            <input type="number"
                v-model.number="filter.attack">
        </label>
    </header>
</template>
import pokemonArray from '../pokedex.js'
<script>
export default {
    props: {
        filter: Object,
        types: Array
    }
};
</script>

<style>

</style>
