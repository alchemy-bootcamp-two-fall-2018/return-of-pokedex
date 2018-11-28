<template>
    <header>
        <label>
            Name:
            <input type="text">
        </label>

        <label>
            Type 1:
            <input type="text">
        </label>

        <label>
            Attack:
            <input v-model.number="filter.attack" type="number">
        </label>

        <label>
            Defense:
            <input type="number">
        </label>
    </header>
</template>

<script>
export default {
    props: {
        filter: Object
    }
};
</script>

<style>
header {
    padding: 20px;
    background: rgb(202, 202, 129);
}
</style>
