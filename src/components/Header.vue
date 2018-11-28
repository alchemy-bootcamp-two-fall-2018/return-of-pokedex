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

        <label>
            Defense
            <input type="number"
                v-model.number="filter.defense">
        </label>
        
        <label>
            Sort By
            <select v-model="sort.field">
                <option value="name">Name</option>
                <option value="type">Type</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
            </select>
            <select v-model="sort.direction">
                <option value="1">Asc</option>
                <option value="-1">Desc</option>
            </select>
        </label>
    </header>
</template>
import pokemonArray from '../pokedex.js'
<script>
export default {
    props: {
        filter: Object,
        types: Array,
        sort: Object
    }
};
</script>

<style>

</style>
