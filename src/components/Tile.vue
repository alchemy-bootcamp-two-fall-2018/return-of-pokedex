<template>
    <section>
        <li v-if="deets !== poke.id" @click="onChoose(poke.id)">
            <img v-bind:src="poke.url_image">
            <h4>Name: {{poke.pokemon}}</h4>
        </li>

        <transition name="slide-fade">
            <li v-if="deets === poke.id">
                <p>Name: {{poke.pokemon}}</p>
                <p>Type: {{poke.type_1}}</p>
                <p>Egg Group: {{poke.egg_group_1}}</p>
                <p>Weight: {{poke.weight}}</p>
                <p>Height: {{poke.height}}</p>
            </li>
        </transition>
    </section>
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
    /* border: 1px solid red; */
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
