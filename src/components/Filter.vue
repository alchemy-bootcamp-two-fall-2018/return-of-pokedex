<template>
    <section>
        <h3>Filter:</h3>
        <select v-model="filterInput.chosen">
            <option value="pokemon">Name</option>
            <option value="type_1">Type</option>
            <option value="egg_group_1">Egg Group</option>
        </select>
        <input v-model="filterInput.txt" v-on:keyup="onSearch(filterInput)">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterInput: {},
        };
    },
    props: {
        onSearch: Function,
    }
};
</script>
