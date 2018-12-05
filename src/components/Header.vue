<template>
    <header>
        <h1>POKEDEX</h1>
        <img scr="http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG14.png">
        <!--<img src="http://www.pokestadium.com/sprites/black-white/animated/shiny/pichu.gif">-->
        <label>
            NAME:
            <input type="text"
            v-model="filter.pokemon" >
        </label>
        <label>
        TYPE ONE:
        <select v-model="filter.type_1">
          <option value="">ANY</option>
          <option v-for="type in types" v-bind:key="type" v-bind:value="type">
            {{type}}
          </option>
        </select>
      </label>
       <label>
        TYPE TWO:
        <select v-model="filter.type_2">
          <option value="">ANY</option>
          <option v-for="type in types" v-bind:key="type" v-bind:value="type">
            {{type}}
          </option>
        </select>
      </label>
       <label>
            ATTACK
            <input type="number"
                v-model.number="filter.attack" min="30" step="5">
        </label>
        <label>
            DEFENSE
            <input type="number"
                v-model.number="filter.defense" min="30" step="5">
        </label>
         SORT BY:
         <label>  
      <select v-model="sort.field">
        <option value="pokemon">NAME</option>
        <option value="type_1">TYPE 02</option>
        <option value="attack">ATTACK</option>
        <option value="defense">DEFENSE</option>

      </select>
      <select v-model="sort.direction">
        <option value="1">Asc</option>
        <option value="-1">Desc</option>
      </select>
    </label>
    </header>
</template>

<script>
export default {

  props: {
    filter: Object,
    types: Array,
    sort: Object
    
  }
};
</script>

<style>
header {
background: black;
color: white;
padding: 10px;
height:400px;
}
</style>
