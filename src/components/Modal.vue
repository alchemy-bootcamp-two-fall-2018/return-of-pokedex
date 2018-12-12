<template>
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
    <button class="close" @click="onClose">X</button>
    <div class="info" :style="{ color: pokemon.color_1 }">
    <img :src="pokemon.url_image" class="side" />
      <h3 class="pokemon-name">{{ pokemon.pokemon }}</h3>
      <p>Type 1: {{ pokemon.type_1 }}</p>
      <p>Type 2: {{ pokemon.type_2 }}</p>
      <p>Hit Points: {{ pokemon.hp }}</p>
      <p>Defense: {{ pokemon.defense }}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        onClose: Function,
        pokemon: Object
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

<style scoped>
.pokemon-name {
    text-transform: capitalize;
}
.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
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
</style>