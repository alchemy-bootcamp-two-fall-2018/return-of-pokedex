<template>
    <header>
        <section class="header">
            <img src="http://www.gbeye.com/thumbnails/lightbox_194600_1498038670.jpg">
        </section>
        <section class="filter">
            <p class="title">Pokedex Finder</p>
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
  .title {
    font-size: 2em;
    margin: 5px;
  }
  .header img {
    height: 150px;
    width: auto;
    position: relative;
  }
  .header {
    background: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 10px;
    border: 5px solid black;
  }
  .filter {
    background: red;
    color: white;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 0px;
    padding-top: 5px;
    border-right: 5px solid black;
    border-bottom: 5px solid black;
    border-left: 5px solid black;
  }
  label {
    display: inline-block;
    margin: 5px 10px;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
</style>
