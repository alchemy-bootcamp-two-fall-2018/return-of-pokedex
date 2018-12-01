<template>
    <header>
        <h1>POKEDEX</h1>
        <!--<img src="http://www.pokestadium.com/sprites/black-white/animated/shiny/pichu.gif">-->
        <label>
            Name:
            <input type="text"
            v-model="filter.pokemon" >
        </label>
        <label>
        Type One:
        <select v-model="filter.type_1">
          <option value="">Any</option>
          <option v-for="type in types" v-bind:key="type" v-bind:value="type">
            {{type}}
          </option>
        </select>
      </label>
       <label>
        Type Two:
        <select v-model="filter.type_2">
          <option value="">Any</option>
          <option v-for="type in types" v-bind:key="type" v-bind:value="type">
            {{type}}
          </option>
        </select>
      </label>
       <label>
            Attack
            <input type="number"
                v-model.number="filter.attack" min="30" step="5">
        </label>
        <label>
            Defense
            <input type="number"
                v-model.number="filter.defense" min="30" step="5">
        </label>
    </header>
</template>

<script>
export default {

  props: {
    filter: Object,
    types: Array,
    
  }
};
</script>

<style>
header {
background: black;
color: white;
padding: 10px;
}
img{
    bottom:0px;
    
    width:20%;
}

</style>
