<template>
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">X</button>
      <slot>
          <h4 id="name">{{pokemon.pokemon}}</h4>
          <div id="types-and-stats-container">
            <div id="types">
                <h4>Type 1: {{pokemon.type_1}}</h4>
                <h4>Type 2: {{pokemon.type_2}}</h4>
                <h4>Ability: {{pokemon.ability_hidden}}</h4>
                <h4>Weight: {{pokemon.weight}}lbs</h4>
            </div>
            <div id="all-stats">
                <h4>HP: {{pokemon.hp}}</h4>
                <h4>SPD: {{pokemon.speed}}</h4>
                <h4>ATK: {{pokemon.attack}}</h4>
                <h4>DEF: {{pokemon.defense}}</h4>
                <h4>SpATK: {{pokemon.special_attack}}</h4>
                <h4>SpDEF: {{pokemon.special_defense}}</h4>
            </div>
          </div>
      </slot>
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

<style scoped>
#name {
    font-size: 25px;
    background-color: rgb(85, 0, 0);
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 18px;
    text-align: center;
    border: 5px inset rgba(128, 21, 21);
}
#types {
    background-color: rgb(212, 106, 106);
    color: white;
    padding: 4px;
    border: 2px solid rgba(0, 0, 0, .5);
}
#all-stats {
    background-color: rgb(212, 106, 106);
    color: white;
    padding: 4px;
    border: 2px solid rgba(0, 0, 0, .5);
}
#types-and-stats-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    grid-column-gap: 6px;
}
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
  background: rgb(170, 57, 57);
  padding: 10px;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>