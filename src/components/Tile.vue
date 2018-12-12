<template>
    <transition-group
        name="list"
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <li v-for="(poke, index) in pokemons"
            v-bind:key="index">
            <p><img v-bind:src="poke.url_image"></p>
            <p>Name: {{poke.pokemon}}</p>
            <p>Type: {{poke.type_1}}</p>
            <p>Egg Group: {{poke.egg_group_1}}</p>
            <p>Weight: {{poke.weight}}</p>
            <p>Height: {{poke.height}}</p>
        </li>
    </transition-group>
</template>

<script>
export default {
    props: {
        pokemons: Array
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                /* eslint-disable-next-line */
                Velocity(
                    el,
                    { opacity: 1, height: '1.6em' },
                    { complete: done }
                );
            }, delay);
        },
        leave: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                /* eslint-disable-next-line */
                Velocity(
                    el,
                    { opacity: 0, height: 100 },
                    { complete: done }
                );
            }, delay);
        }
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
        /* border: 1px solid red; */
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
</style>
