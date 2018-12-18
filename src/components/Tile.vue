<template>
    <section>
        <li v-if="deets !== poke.id" @click="onChoose(poke.id)">
            <img class="selection" v-bind:src="poke.url_image">
            <h4>Name: {{poke.pokemon}}</h4>
        </li>

        <transition name="slide-fade">
            <li v-if="deets === poke.id" class="info">
                <img class="deet-image" :src="poke.url_image">
                <p>Name: {{poke.pokemon}}</p>
                <p>Type: {{poke.type_1}}</p>
                <p>Egg Group: {{poke.egg_group_1}}</p>
                <p>Weight: {{poke.weight}}</p>
                <p>Height: {{poke.height}}</p>
            </li>
        </transition>
    </section>
</template>

<script>
export default {
    props: {
        poke: Object,
        onChoose: Function,
        deets: Number
    }
};
</script>

<style scoped lang="postcss">
@import '../styles.css';

li {
  position: relative;
  height: $card-size;
  overflow: hidden;
  &:hover {
    .selection {
      transform: scale(1.3);
      filter: grayscale(0);
    }
    .info {
      bottom: 0;
    }
  }
}
.selection {
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  transition: 500ms;
  filter: grayscale(1);
}
.deet-image {
  width: 100px;
}
.info {
  transition: 500ms;
  position: fixed;
  top: 2vh;
  right: 2vw;
  bottom: -100px;
  width: 40vw;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 5px;
  color: $teal;
}
h4, p {
  margin: 0;
}

.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
