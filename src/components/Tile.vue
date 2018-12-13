<template>
    <li>
        <img @click="onChoose(poke.id)" v-bind:src="poke.url_image">
        <p>Name: {{poke.pokemon}}</p>
    </li>
</template>

<script>
export default {
    props: {
        poke: Object,
        onChoose: Function,
        deets: Boolean
    }
};
</script>

<style>
    img {
        width: 100px;
    }

    li {
        list-style: none;
        display: inline-block;
        padding: 2%;
        margin: 1%;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    .hidden {
        display: none;
    }
</style>
