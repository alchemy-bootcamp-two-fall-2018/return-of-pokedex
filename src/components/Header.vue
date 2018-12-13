<template>
  <header>
    <h1>Return Of The Pokemons</h1>
    <label>
      Name:
      <input type="text" v-model="filter.name" >
    </label>
    <label>
      Attack:
      <input type="number" v-model.number="filter.attack" step="10" >
    </label>
    <label>
      Type_1:
      <select v-model="filter.type_1">
        <option value="">All</option>
        <option
          v-for="type_1 in types"
          v-bind:key="type_1"
          v-bind:value="type_1">
          {{type_1}}
        </option>
      </select> 
    </label>
    <label> 
      Defense:
      <input type="number" v-model.number="filter.defense" step="10" >
    </label>  
    <label>
      Sort by:
        <select v-model="sort.field">
          <option value="all"></option>
          <option value="pokemon">Name</option>
          <option value="type">Type 1</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
        </select>
        <select v-model="sort.direction">
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </select>
    </label>
  </header>    
</template>

<script>

export default {
   
    props: {
        filter:Object,
        types: Array,
        sort: Object
    }
};
</script>

<style scoped lang="postcss">
header {
  background: steelblue;
  color: white;
  padding: 10px
}
</style>
