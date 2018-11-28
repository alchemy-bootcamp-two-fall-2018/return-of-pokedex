<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <div class="info">
            <h3>{{pokemon.pokemon}}</h3>
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
li{
  position:relative;
  /*height: 300px;*/
}
img{
  /*position:absolute;*/
  top:0;
  left:0;
  width:100px;
  height:100px;
  object-fit: cover;
  z-index:-1;

}
.info{
  position: absolute; 
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 0.8);
  text-align: center;
}

</style>
