<template>
<transition name="fade">
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">X</button>
      <h2 class=modal-title>{{pokemon.pokemon}}</h2>
      <img class="modal-img" v-bind:src="pokemon.url_image">
      <h4 class="black">Type 1: {{pokemon.type_1}}</h4>
      <h4 class="black">Type 2: {{pokemon.type_2}}</h4>
      <h4 class="black">Attack: {{pokemon.attack}}</h4>
      <h4 class="black">Defense: {{pokemon.defense}}</h4>
    </div>
  </div>
</transition>   
</template>

<script>


export default {
  props: {
    pokemon: Object,
    onClose: Function
  },
  created() {
    this.documentListener = event => {
      if(event.keyCode === 27) {
        this.onClose();
      }
    };

    document.addEventListener('keyup', this.documentListener);
  },
  destroyed() {
    document.removeEventListener('keyup', this.documentListener);
  }
};
</script>

<style scoped lang="postcss">

.black {
    color: black;
}

.modal-img {
    width: 70%;
}

h2 {
    font-size: 3.5em;
    color: #D1FF70;
    text-shadow: 2px 2px black;
    margin: 0;
    padding: 0;
}

.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(118, 217, 255, 0.5);
}

.content {
  position: relative;
  background: #FFA4D9;
  padding: 40px;
  border-radius: 25px;
}

.close {
  position: absolute;
  top: 25px;
  right: 25px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  background: rgba(118, 217, 255, 0.5);
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  background: rgba(118, 217, 255, 0.5);
}

</style>
