<template>
    <header>
        <label>
            Name:
            <input type="text"
                v-model="filter.name">
        </label>
    </header>
</template>
import pokemonArray from '../pokedex.js'
<script>
export default {
    props: {
        filter: Object
    }
};
</script>

<style>

</style>
