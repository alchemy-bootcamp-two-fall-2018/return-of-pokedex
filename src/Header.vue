<template>
    <header>
        
        <label>
            Name:
            <input>      
        </label>
        
        <label>
            Weight:
            <input type = "number"
                v-model.number="filter.weight"
                step="5"
            >
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
        background: yellowgreen;
        color: purple;
        padding: 10px;
    }

</style>
