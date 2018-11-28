<template>
    <div>
        <h1>Search the Pokedex!</h1>
        <label for="name"> Name: 
            <input type="text" name="name" id="name"
            v-model.text:="filter.name"
            >
        </label>


        <label for="type_1"> Type:
            <input type_1="text" name="type_1" id="type_1"
            v-model.text:="filter.type_1"
            >
        </label>

        <label for="attack"> Attack:
            <input type="number" name="attack" id="attack"
            v-model.number:="filter.attack"
            >
        </label>

        <label for="defense"> Defense:
            <input type="number" name="defense" id="defense"
            v-model.number:="filter.defense"
            >
        </label>

        <label for="sort">
            Sort By:
            <select v-model="sort.field">
                <option value="">All</option>
                <option value="pokemon">Name</option>
                <option value="type_1">Type</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
            </select>
            <select v-model="sort.direction">
                <option value="1">Highest</option>
                <option value="-1">Lowest</option>
            </select>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        filter: Object,
        sort: Object
    }
};
</script>

<style>


</style>
