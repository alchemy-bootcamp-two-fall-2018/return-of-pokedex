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
                </option>
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

</style>
