<template>
    <section>
        <h3>Sort By:</h3>
        <select v-model="sortFilter" v-on:change="onSort(sortFilter)">
            <option value="">None</option>
            <option value="pokemon">Name</option>
            <option value="weight">Weight</option>
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
