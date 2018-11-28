<template>
    <div>
     <h1>Header Search the Pokedex!</h1>
    <label for="name"> Name:
        <input type="text" name="name" id="name"
        v-model.text:="filter.name"
        >
    </label>


    <label for="type_1"> type One:
        <input type_1="text" name="type_1" id="type_1"
        v-model.text:="filter.type_1"
        >
    </label>

    <label for="attack"> Attack:
        <input type="number" name="attack" id="attack"
        v-model.number:="filter.attack"
        >
    </label>

    <label for="defense"> Defense:
        <input type="number" name="defense" id="defense"
        v-model.number:="filter.defense"
        >
    </label>

    <!-- <label for="name"> filter three </label> -->
    </div>
</template>

<script>
export default {
    props: {
        filter: Object
    }
};
</script>

<style>

</style>
