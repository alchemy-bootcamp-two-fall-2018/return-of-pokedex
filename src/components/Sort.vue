<template>
    <section>
        <h3>Sort By:</h3>
        <select v-model="sortFilter" v-on:change="onSort(sortFilter)">
            <option value="">None</option>
            <option value="pokemon">Name</option>
            <!-- <option value="type_1">Type</option>
            <option value="egg_group_1">Egg Group</option> -->
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
