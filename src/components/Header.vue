<template>
  <header>
      <h1>Pokedex Zombie Rises Again!</h1>
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
        <!-- maybe exclude type here -->
        <option value="type">Type</option>
        <option value="attack">Attack</option>
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

<style scoped>
header {
    background: rgb(241, 241, 11);
    color: rgb(199, 40, 40);
    padding: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding-top: 10px;
}
h1 {
        font-size: 5em;
        padding: 10px;
        margin: 0px;
    }
    html {
        margin: 0px;
        padding: 0px;
    }
</style>