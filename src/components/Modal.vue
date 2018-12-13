
<template>
  <div class="modal" @click="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: {
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
  background-image:url(https://static.tumblr.com/bfd42c6e12c4a48a0630ca3b0fcd1d15/vt0qhql/KSbnz4jg0/tumblr_static_tumblr_static_filename_640.jpg);
  /* background-color: rgba(0, 0, 0, .5); */
  z-index: 5;
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