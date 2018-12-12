<template>
<transition name="fade">
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">X</button>
             <h2>{{pokemon.pokemon}}</h2>
            <img v-bind:src="pokemon.url_image">
            <h4>Type 1: {{pokemon.type_1}}</h4>
            <h4>Type 2: {{pokemon.type_2}}</h4>
            <h4>Attack: {{pokemon.attack}}</h4>
            <h4>Defense: {{pokemon.defense}}</h4>

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

<style>

.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(214, 179, 19, 0.5);
}

.content {
  position: relative;
  background: white;
  padding: 40px;
}

.close {
  position: absolute;
  top: 5px;
  right: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  background: rgba(214, 179, 19, 0.5);
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  background: rgba(214, 179, 19, 0.5);
}

</style>
