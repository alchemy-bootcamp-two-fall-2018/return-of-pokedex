<template>
  <section>
    <div v-if="pokemon">
      <img v-bind:src="pokemon.url_image" />
      <h3>{{ pokemon.pokemon }}</h3>
      <p>Type 1: {{pokemon.type_1}}</p>
      <p>Type 2: {{pokemon.type_2}}</p> 
      <p>Attack: {{pokemon.attack}}</p>
      <p>Defense: {{pokemon.defense}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style>
  .flip-container {
    position: relative;
    height: 350px;
    width: 350px;
    border: 5px solid;
    background: black;
    margin: 0px 10px;
  }
  .front img {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
  .info {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 130px;
    color: white;
    /* background: rgba(255, 255, 255, 0.8); */
    line-height: 0.4em;
    font-size: 1em;
    z-index: 10;
  }
  .flip-container {
    perspective: 1000px;
  }
	/* flip the pane when hovered */
	.flip-container:hover .flipper, .flip-container.hover .flipper {
		transform: rotateY(180deg);
	}

  .front, .back {
    width: 350px;
    height: 350px;
  } 

  /* flip speed goes here */
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
  }

  /* hide back of pane during swap */
  .front, .back {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }

  /* front pane, placed above back */
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
  }

  /* back, initially hidden pane */
  .back {
    transform: rotateY(180deg);
  }
      

</style>