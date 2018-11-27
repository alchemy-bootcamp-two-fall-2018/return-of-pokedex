<template>
    <div>
     <h1>Header Search the Pokedex!</h1>
    <label for="name"> Name:
        <input type="text" name="name" id="name"
        v-model.text:="filter.name"
        >
    </label>


    <!-- <label for="name"> filter two </label> -->


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
