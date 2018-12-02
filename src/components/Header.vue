<template>
    <header>
        <label>
            <strong>Name: </strong>
            <input type="text">
        </label>

        <label>
            <strong>Type 1: </strong>
            <input type="text">
        </label>

        <label>
            <strong>Attack: </strong>
            <input v-model.number="filter.attack" type="number">
        </label>

        <label>
            <strong>Defense: </strong>
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
    background: rgb(28, 117, 201);
    color: whitesmoke;
}
</style>
