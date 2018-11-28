<template>
    <section>
        <h3>Number Filter:</h3>
        <select v-model="numFilter.chosen">
            <option value="weight">Weight</option>
            <option value="height">Height</option>
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
