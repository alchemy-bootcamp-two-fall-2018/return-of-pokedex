<template>
  <div class="modal" @click="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">X</button>
      <p>Type 1: {{ pokemon.type_1 }}</p>
      <p>Type 2: {{ pokemon.type_2 }}</p>
      <p>Attack: {{pokemon.attack}}</p>
      <p>Defense: {{pokemon.defense}}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    pokemon: Object,
    onClose: Function
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
