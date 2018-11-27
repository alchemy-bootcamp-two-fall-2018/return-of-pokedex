<template>
    <section>
        <h3>Filter:</h3>
        <select v-model="filter">
            <option value="pokemon">pokemon</option>
            <option value="type_1">type_1</option>
            <option value="egg_group_1">egg_group_1</option>
        </select>
        <input v-model="input" v-on:keyup="onSearch(filter, input)">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filter: '',
            input: ''
        };
    },
    props: {
        onSearch: Function
    }
};
</script>
