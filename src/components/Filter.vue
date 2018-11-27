<template>
    <section>
        <h3>Filter:</h3>
        <select v-model="filterInput.chosen">
            <option value="pokemon">pokemon</option>
            <option value="type_1">type_1</option>
            <option value="egg_group_1">egg_group_1</option>
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
