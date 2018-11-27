<template>
    <section>
        <h3>Number Filter:</h3>
        <select v-model="numFilter.chosen">
            <option value="weight">weight</option>
            <option value="height">height</option>
        </select>
        <input type="number" v-model.number="numFilter.input" v-on:keyup="onNum(numFilter)">
    </section>
</template>

<script>
export default {
    data() {
        return {
            numFilter: {},
        };
    },
    props: {
        onNum: Function
    }
};
</script>
