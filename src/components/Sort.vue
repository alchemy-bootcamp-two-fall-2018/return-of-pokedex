<template>
    <section>
        <h3>Sort By:</h3>
        <select v-model="sortFilter" v-on:change="onSort(sortFilter)">
            <option value="pokemon">pokemon</option>
            <option value="type_1">type_1</option>
            <option value="egg_group_1">egg_group_1</option>
        </select>
    </section>
</template>

<script>
export default {
    data() {
        return {
            sortFilter: '',
        };
    },
    props: {
        onSort: Function
    }
};
</script>
