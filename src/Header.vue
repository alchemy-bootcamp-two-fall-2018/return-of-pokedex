<template>
    <header>
        
        <label>
            Name:
            <input 
                v-model="filter.pokemon"
            >      
        </label>
        
        <label>
            Weight:
            <input type = "number"
                v-model.number="filter.weight"
                step="5"
            >
        </label>

        <label>
            Height: 
            <input type = "number"
            v-model.number="filter.height"
            step="5"
            >
        </label>

        <label>
            Types:
            <select v-model="filter.type_1">
                <option value="">All</option>
                <option 
                    v-for="type in types"
                    v-bind:key="type"
                    v-bind:value="type">
                    {{type}}
                </option>
            </select>
        </label>

    </header>
</template>

<script>

export default {
    props: {
        filter: Object
    }
};

</script>

<style>
    header {
        background: yellowgreen;
        color: purple;
        padding: 10px;
    }

</style>
