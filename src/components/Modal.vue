<template>
  <div class="modal" @click="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">⇦</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        onClose: Function,
        pokemon: Object
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
  background-image: url(https://i.imgur.com/eVcYPSa.png);
  /* background-color: rgba(0, 0, 0, .5); */
  z-index: 5;
}
.content {
  position: relative;
  background: rgb(192, 255, 216);
  padding: 40px;
  border-radius: 45px;
  /* background-image: url(pokemon.url_image); */
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>