<template>
  <header>
      <h1>Pokedex Zombie Rises Again!</h1>
      <section class="filter"> 
        <p class="title">Pokedex Hunter</p>
    <label>
      Type:
      <select v-model="filter.type">
        <option value="">All</option>
        <option 
          v-for="type in types" 
          v-bind:key="type"
          v-bind:value="type">
          {{type}}
        </option>
      </select>
    </label>

    <label>
      Attack:
      <input type="number" 
        v-model.number="filter.attack" 
        step="10"
      >
    </label>

    <label>
      Sort By:
      <select v-model="sort.field">
        <option value="pokemon">Name</option>
        <option value="type1">Type</option>
        <option value="attack">Attack</option>
      </select>
    </label>
    <label>
      <select v-model="sort.direction">
        <option value="1">Ascending Order</option>
        <option value="-1">Descending Order</option>
      </select>
    </label>
    </section>
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

<style lang="postcss" scoped>
.header {
    display: flex;
    flex-direction: column;
    background: rgb(226, 241, 11);
    color: rgb(164, 199, 40);
    padding: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding-top: 10px;
}
.filter {
  background: rgb(238, 234, 22);
  color: red;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 0px;
  padding-top: 5px;  
}
label {
  padding: 10px;
  margin: 5px;
}
    
</style>