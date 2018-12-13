<template>
    <li v-if="deets !== poke.id" @click="onChoose(poke.id)">
        <img v-bind:src="poke.url_image">
        <h4>Name: {{poke.pokemon}}</h4>
    </li>

    <li v-else>
        <p>Name: {{poke.pokemon}}</p>
        <p>Type: {{poke.type_1}}</p>
        <p>Egg Group: {{poke.egg_group_1}}</p>
        <p>Weight: {{poke.weight}}</p>
        <p>Height: {{poke.height}}</p>
    </li>
</template>

<script>
export default {
    props: {
        poke: Object,
        onChoose: Function,
        deets: Number
    }
};
</script>

<style scoped lang="postcss">
@import '../styles.css';

img {
    width: 100px;
}

li {
    list-style: none;
    display: inline-block;
    padding: 2%;
    margin: 1%;
    height: 150px;
    width: 150px;
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
