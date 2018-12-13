<template>
    <!-- <transition-group
        name="list"
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"> -->
    <li>
        <img @click="onChoose(poke.id)" v-bind:src="poke.url_image">
        <p>Name: {{poke.pokemon}}</p>
        <div>
            <p>Type: {{poke.type_1}}</p>
            <p>Egg Group: {{poke.egg_group_1}}</p>
            <p>Weight: {{poke.weight}}</p>
            <p>Height: {{poke.height}}</p>
        </div>
    </li>
    <!-- </transition-group> -->
</template>

<script>
export default {
    // data() {
    //     return {
    //         isHidden: true
    //     };
    // },
    props: {
        poke: Object,
        onChoose: Function
    },
    methods: {
        // deets(id) {
        //     document.getElementById(id).isHidden = !document.getElementById(id).isHidden;
        //     console.log(id);
        // },
        // beforeEnter: function(el) {
        //     el.style.opacity = 0;
        //     el.style.height = 0;
        // },
        // enter: function(el, done) {
        //     var delay = el.dataset.index * 150;
        //     setTimeout(function() {
        //         /* eslint-disable-next-line */
        //         Velocity(
        //             el,
        //             { opacity: 1, height: '1.6em' },
        //             { complete: done }
        //         );
        //     }, delay);
        // },
        // leave: function(el, done) {
        //     var delay = el.dataset.index * 150;
        //     setTimeout(function() {
        //         /* eslint-disable-next-line */
        //         Velocity(
        //             el,
        //             { opacity: 0, height: 100 },
        //             { complete: done }
        //         );
        //     }, delay);
        // }
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
