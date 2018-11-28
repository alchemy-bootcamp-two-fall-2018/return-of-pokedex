<template>
    <header>
    <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
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

<style>
    header {
        padding:25px;
        background:brown; 
        text-align: center;  
        font-family: 'VT323', monospace;
        font-size: 40px;
 
    }




</style>