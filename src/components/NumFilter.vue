<template>
    <section>
        <h3>Number Filter:</h3>
        <select v-model="numFilter">
            <option value="weight">weight</option>
            <option value="height">height</option>
        </select>
        <input type="number" v-model.number="input" v-on:keyup="onNum(numFilter, input)">
    </section>
</template>

<script>
export default {
    data() {
        return {
            numFilter: '',
            input: ''
        };
    },
    props: {
        onNum: Function
    }
};
</script>
