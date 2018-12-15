<template>
  <header>
    <h1>Pokedex</h1>
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
        Defense:
        <input type="number"
          v-model.number="filter.defense"
          step="10"
        >
      </label>

  <label>
      Sort By:
      <select v-model="sort.field">
        <option value="pokemon">Name</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
      </select>
      <select v-model="sort.direction">
        <option value="1">Ascending Order</option>
        <option value="-1">Descending Order</option>
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

</style>
