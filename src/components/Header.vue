<template>
    <header>
        <img src="../assets/pokeball.png" id="pokeball">
        <h1>Tyler's Pokédex</h1>
            <label>
                Type:
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
                Attack:
                <input type="number"
                v-model.number="filter.attack"
                >
            </label>
            <label>
                Sort By:
                <select v-model="sort.field">
                    <option value="pokemon">Name</option>
                    <option value="type">Type</option>
                    <option value="attack">Attack</option>
                </select>
                <select v-model="sort.direction">
                    <option value="1">Asc</option>
                    <option value="-1">Desc</option>
                </select>
            </label>
    </header>
</template>

<script>
export default {
    props: {
        filter: Object,
        types: Array,
        sort: Object
    }
};
</script>

<style scoped>
    header {
        padding: 15px;
        background: steelblue;
        color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    #pokeball {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    label {
        margin: 5px;
        background-color: rgb(252, 34, 42);
        border: 2px solid black;
        padding: 5px;
    }
    select {
        margin: 5px;
    }
    h1 {
        margin-right: 10px;
    }
</style>
