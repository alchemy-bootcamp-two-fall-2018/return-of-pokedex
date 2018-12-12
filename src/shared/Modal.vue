<template>
<transition name="fade">
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
    <button class="close" @click="onClose">X</button>
             <h2>{{pokemon.pokemon}}</h2>
            <img class="modal-image" v-bind:src="pokemon.url_image">
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
        console.log('Modal created');
        this.documentListener = event => {
            if(event.keyCode === 27) {
                console.log('closing');
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
  z-index: 99;
  justify-content: center;
  align-items: center;
  background-color:rgba(245, 176, 176, 0.5);
}
.content {
  position: relative;
  background: white;
  padding: 40px;
  color:black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  border-radius: 10pt;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
  border: 1px solid black;
}
.modal-image {
  width: 200px;
  height: 200px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  background-color:rgba(245, 176, 176, 0.5);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  background-color:rgba(245, 176, 176, 0.5);
}
</style>