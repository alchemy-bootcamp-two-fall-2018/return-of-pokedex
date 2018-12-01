<template>
    <li class="card">
        <img v-bind:src="pokemon.url_image" />
        <div class="info">
            <h3>{{pokemon.pokemon}}</h3>
            <p>Type One: {{pokemon.type_1}}</p>
            <p>Type Two: {{pokemon.type_2}}</p>
            <p>Attack: {{pokemon.attack}}</p>
            <p>Defense: {{pokemon.defense}}</p>
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
h3,p {
    margin: 0;
}
li .card {
  position: absolute;
  border: 3px solid aquamarine; 
  /*height: 300px;*/
}
.card img {
  /*position:absolute;*/
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit: cover;
  z-index:-1;

}
.info {
  position: relative; 
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 0.8);
  text-align: center;
}

</style>
