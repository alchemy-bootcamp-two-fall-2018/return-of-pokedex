<template>
    <li>
        <img v-bind:src='pokemon.url_image'>
        <div class="descriptions">
            <h3 class="name">{{ pokemon.pokemon}}</h3>
            <p>Types: {{pokemon.type_1}}, {{pokemon.type_2}}</p>
            <p>Wt: {{pokemon.weight}} Ht: {{pokemon.height}}</p> 
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
    li {
        position: relative;
        height: 200px;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
        border: 1px solid black;
    }

    .descriptions {
        margin: auto;
        width: 50%;
        border: 1px solid black;
        border-radius: 15px; 
        background-color: rgba(199, 216, 126, .4);
        line-height: 50%;
        text-align: center;
        font-weight: bold;
    }
</style>
