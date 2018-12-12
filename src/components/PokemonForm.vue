<template>
<div class="form">
          <label>
              NAME:
              <input class="name" type="text"
              v-model="filter.pokemon" >
          </label>
          <label>
              ATTACK
              <input class="number" type="number"
                  v-model.number="filter.attack" min="30" step="5">
          </label>
          <label>
              DEFENSE
              <input class="number" type="number"
                  v-model.number="filter.defense" min="30" step="5">
          </label>
          <label>
          SORT BY:
        <select class="select" v-model="sort.field">
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
         

    </div>
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
input {
   display: block;
   padding: 10px;
   width:250px;
   background-color: #e8eeef;
   color: black;
   box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
   margin: 5px 0 10px 0;
   font-size: 15px;
   text-align: left;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   margin-top: 60px;
  }
  input:focus {
  background-color: #f7ffe0;
  border-radius: 5px;
  outline:none;
}
</style>


