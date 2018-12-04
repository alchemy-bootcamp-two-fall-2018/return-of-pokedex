<template>
  <header>

    <label for="name"> Name:
    <input type="text" name="name" id="name"
    v-model.text:="filter.name"
    >
    </label>

    <label for="hp"> Health:
    <input type="text" name="hp" id="hp"
    v-model.text:="filter.hp"
    >
    </label>

    <label for="attack"> Minimum Attack:
    <input type="text" name="attack" id="attack"
    v-model.text:="filter.attack"
    >
    </label>

    <label for="defense"> Mimumum Defense:
    <input type="text" name="defense" id="defense"
    v-model.text:="filter.defense"
    >
    </label>
    
    <label for="sort">
      Sort By:
      <select v-model="sort.field">
        <option value="pokemon">Name</option>
        <option value="hp">Health</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
      </select>
      <select v-model="sort.direction">
        <option value="1">Ascending order</option>
        <option value="-1">Descending order</option>
      </select>
    </label>
  </header>
</template>

<script>
export default {
  props: {
    filter: Object,
    sort: Object
  }
};
</script>

<style scoped>
header {
  background: black;
  color: white;
  padding: 5px;
}
</style>