<template>
    <li class="card">
        <div class="info">
        <img v-bind:src="pokemon.url_image" />
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
li.card {
}
.card img {
  width:100%;
  height:100%;
  object-fit: contain;
  z-index:-1;

}
.info {
  width: 100%;
  /* background: rgba(255, 255, 0.8); */
  text-align: center;
}

</style>
