<template>
    <li>
        <img v-bind:src="pokemon.image"/>  
        <div>  
            <h3> {{pokemon.name}}</h3>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        pokemon: Object
    }

};
</script>   

<style>

</style>
