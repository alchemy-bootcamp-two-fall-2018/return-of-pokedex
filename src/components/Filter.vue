<template>
    <section>
        <p>Filter:</p>
        <select v-model="filter">
            <option>pokemon</option>
            <option>type_1</option>
            <option>egg_group_1</option>
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
