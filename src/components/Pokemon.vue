<template>
	<li>
		<h3>{{ pokemon.pokemon }}</h3>
		<img v-bind:src="pokemon.url_image" />
		<button @click="show = true">View Details</button>
		<transition name="fade">
			<Modal v-if="show" v-bind:onClose="() => show = false">
				<div v-if="pokemon">
					<img v-bind:src="pokemon.url_image" />
					<h3>{{ pokemon.pokemon }}</h3>
					<p>Type 1: {{pokemon.type_1}}</p>
					<p>Type 2: {{pokemon.type_2}}</p> 
					<p>Attack: {{pokemon.attack}}</p>
					<p>Defense: {{pokemon.defense}}</p>
				</div>
			</Modal>
		</transition>
	</li>
</template>

<script>
import Modal from './Modal.vue';
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    pokemon: Object
  },
  components: {
    Modal
  }
};
</script>

<style scoped>
li {
	position: relative;
	height: 350px;
	width: 350px;
	border: 5px solid;
	background: black;
	margin: 0px 10px;
}
img {
	width: 75%;
	height: 75%;
	z-index: 1;
	object-fit: cover;
	margin-top: -20px;
}
h3 {
	color: white;
	font-size: 1.3em;
}

.fade-enter-active, .fade-leave-active {
opacity: 1;
transition: opacity .5s ease-in-out;
}
.fade-enter, .fade-leave-active {
opacity: 0
}
  
</style>