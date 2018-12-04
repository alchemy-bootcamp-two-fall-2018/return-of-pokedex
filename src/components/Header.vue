<template>
    <header>
        <label>
            <strong>Name: </strong>
            <select v-model="filter.pokemon">
                <option value="">Any</option>
                <option
                    v-for="pokemon in types"
                    :key="pokemon"
                    :value="pokemon">
                    {{pokemon}}
                </option>
            </select>

        </label>

        <label>
            <strong>Type 1: </strong>
            <select v-model="filter.type_1">
                <option value="">Any</option>
                <option
                    v-for="type1 in types"
                    :key="type1"
                    :value="type1">
                    {{type1}}
                </option> 
            </select>

        </label>

        <label>
            <strong>Attack: </strong>
            <input type="number" v-model="filter.attack">
        </label>

        <label>
            <strong>Defense: </strong>
            <input type="number" v-model="filter.defense">
        </label>

        <label>
            Sort By:
            <select v-model="sort.field">
                <option value="name">Pokemon Name</option>
                <option value="type">Type 1</option>
                <option value="attack">Attack Points</option>
                <option value="defense">Defense Points</option>
            </select>

            <select v-model="sort.direction">
                <option value="1">Asc</option>
                <option value="-1">Dsc</option>
            </select>
        </label>
    </header>
</template>

<script>
export default {
    props: {
        filter: Object
        // // types: Array,
        // sort: Object
    }
};
</script>

<style>
header {
    padding: 20px;
    background: rgb(28, 117, 201);
    color: whitesmoke;
}
</style>
