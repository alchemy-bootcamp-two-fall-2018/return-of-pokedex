<template>
    <header>
        <label>
            Type:
            <select v-model="filter.type">
                <option value="">All</option>
                <option
                    v-for="type in types"
                    v-bind:key="type"
                    v-bind:value="type">
                    {{type}}
                </option>
            </select>
        </label>

        <label>
            Attack:
            <input type="number"
                v-model.number="filter.attack"
                step="10"
            >
        </label>

        <label>
            Defense:
            <input type="number"
                v-model.number="filter.defense"
                step="10"
            >
        </label>

        <label>
            Sort By:
            <select v-model="sort.field">
                <option value="pokemon">Name</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
            </select>
        </label>
    </header>
</template>

<script>
export default {
    props: {
        filter: Object,
        types: Array,
        sort: Object
    }
};
</script>

<style>
    header {
        background: red;
        color: white;
        padding: 20px;
    }

</style>
