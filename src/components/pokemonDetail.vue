<template>
    <li>
        <img v-bind:src="pokemon.url_image"/>  
        <div>  
            <h3> {{pokemon.pokemon}}</h3>
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
