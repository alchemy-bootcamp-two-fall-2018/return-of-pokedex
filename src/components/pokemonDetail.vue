<template>
    <li>
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
</template>

<script>
export default {
    props: {
        pokemon: Object, 
        
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
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;

}
.info {
    color: black;
    background-color: white;
    opacity: .6;
    position: absolute;
    bottom: 0%;
    width: 100%;
}
.info:hover {
    font-size: 40px;
}

h2 {
    font-size: 20px;
}
h2, h5 {
    padding: 0;
    margin: 0;
}


</style>
