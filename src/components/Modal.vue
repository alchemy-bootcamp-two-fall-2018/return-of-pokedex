<template>
    <div class="modal" @click="onClose">
       <div class="content" @click.stop="">
           <button class="close" @click="onClose"> X </button>
            <img :src="pokemon.url_image"/>
            <h3>{{pokemon.pokemon}}</h3>
            <p>Type 1: {{pokemon.type_1}}</p>
            <p>Type 2: {{pokemon.type_2}}</p>
            <p>Attack: {{pokemon.attack}}</p>
            <p>Defense:{{pokemon.defense}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        onClose: Function,
        pokemon: Object
    },
    created(){
        this.documentListener = event => {
            if(event.keyCode === 27){
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
  background-color: rgba(0, 0, 0, .5);
  color: black;
  z-index: 1;
}
.content {
  position: relative;
  background: lightgray;
  padding: 40px;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
}
img {
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
}
</style>
