<template>
    <ul>
        <li>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"/>
            {{pokemons}}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        pokemons: Array
    }
};
</script>

<style>

</style>
