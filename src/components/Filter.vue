<template>
    <section>
        <p>Filter:</p>
        <select v-model="filter">
            <option>Name</option>
            <option>Type</option>
            <option>Egg Group</option>
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
