<template>

  <header>
    <h1>{{ msg }}</h1>
    <h1>{{filter}}</h1>
    <h1>{{types}}</h1>
      <label>
        Name:
        <input type="text" v-model="filter.pokemon">
      </label>
      <label>
        Type 1:
        <select v-model="filter.type">
          <option value="">Any</option>
          <option v-for="type in types" v-bind:key="type" v-bind:value="type">
            {{type}}
          </option>
        </select>
      </label>
      <label>
        Type 2:
        <select v-model="filter.types">
          <option value="">Any</option>
          <option v-for="typeTwo in types" v-bind:key="typeTwo" v-bind:value="typeTwo">
          </option>
        </select>
      </label>
      <label>
        Hit Points:
        <input type="number" v-model="filter.hp">
      </label>
      <label>
        Defense:
        <input type="number" v-model="filter.defense">
      </label>

      <label>
      Sort By:
      <select v-model="sort.field">
        <option value="pokemon">Name</option>
        <option value="type_1">Type 1</option>
        <option value="type_2">Type 2</option>
        <option value="hp">Hit Points</option>
        <option value="defense">Defense</option>

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
        msg: String,
        filter: Object,
        types: Array,
        sort: Object
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>