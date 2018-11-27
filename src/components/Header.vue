// Header:
// Container for Filter and Sort

<template>
    <header>
        <label>
            Type 1:
            <input type="text"
                v-model="filter.type-1">
        </label>

        <label>
            Type 2:
            <input type="text"
                v-model="filter.type-2">
        </label>
        <label>
            Attack:
            <input type="number"
                v-model.number="filter.attack">
        </label>

        <label>
            Sort By Name:
            <input type="checkbox" v-model.number="sort.field">

        </label>
    </header>
</template>

<script>

export default {
    props: {
        filter: Object,
        sort: Object
    }
};
</script>

<style scoped>
header {
    background: greenyellow;
    color: black;
    padding: 10px;
}
</style>