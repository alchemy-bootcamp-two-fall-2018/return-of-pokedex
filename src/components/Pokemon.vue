<template>
    <li>
        <img :src="pokemon.url_image" />
        <div class="info">
            <h3>{{ pokemon.pokemon }}</h3>
            <p>Type 1: {{ pokemon.type_1 }}</p>
            <p>Attack Pts: {{ pokemon.attack }}</p>
            <p>Defense Pts: {{ pokemon.defense }}</p>
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
    left: 30px;
    width: 100%;
    max-width: 150px;
}

.info {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(223, 219, 29, 0.8);
    text-align: center;
}

h3, p {
    margin: 0;
    font-size: 13px;
}
</style>
