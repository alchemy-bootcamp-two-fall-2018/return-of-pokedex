<template>
  <div class="modal" @click="onClose" @keyup.esc="onClose">
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

<style scoped lang="postcss">
  .modal {
    position: fixed;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
    z-index: 10;
  }
  .content {
    position: relative;
    background: white;
    padding: 20px;
    z-index: 2;
    border: 10px solid darkgray;
    margin: 0px;
    width: 50%;
  }
  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    background: red;
  }
</style>