<template>
    <transition name="fade">
            <li :key="pokemon">
                <img v-bind:src="pokemon.url_image"/>  
                <div class="info">  
                    <h2> {{pokemon.pokemon}}</h2>
                    <div class="stats">
                    <h5>Attack: {{pokemon.attack}}</h5>
                    <h5>Defense: {{pokemon.defense}}</h5>
                    <h5>Generation: {{pokemon.generation_id}} </h5>
                    </div>
                </div>
            </li>
    </transition>
</template>

<script>
export default {
    props: {
        pokemon: Object
    }

};
</script>

<style>

    .fade-enter-active {
    transition: all 4s ease;
    transition: height, 4s ease;
    opacity: 100;

    }
    .fade-enter-to-active {
        height: 100%;
    }
    .fade-leave-active {
        transition: all 4s cubic-bezier(4.0, 2.4, 2.6, 4.0);
        opacity: 0;
    }
    .fade-enter, .fade-leave-to {
        transform: translateX(100px);
        opacity: 0;
        margin-top: -260px;
    }
   img {
       max-width: 400px;
   }
</style>
