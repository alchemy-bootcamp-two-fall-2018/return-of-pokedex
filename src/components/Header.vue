<template>
    <header>
        <label class="label">
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
        <label class="label">
            Weight:
            <input type="number" v-model.number="filter.weight" step="10">
        </label>
        <label class="label">
            Defense:
            <input type="number" v-model.number="filter.defense" step="10">
        </label>
        <label>
            Sort By:
            <select v-model="sort.field">
                <option value="type">Type</option>
                <option value="weight">Weight</option>
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
    background: lightgoldenrodyellow;
    color: gray;
    padding: 20px;
}
.label {
    font-weight: 200px;
}
</style>
