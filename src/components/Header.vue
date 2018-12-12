<template>
    <header class="header">
        <h1 class="title">The Pokedex of Doom</h1>

        <div class="form" v-if="show">   
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
                Name:
                <input 
                    v-model="filter.name" 
            >
            </label>
            <label>
                Attack:
                <input type="number" 
                    v-model.number="filter.attack" 
            >
            </label>
            <label>
            Sort By:
            <select v-model="sort.field">
                <option value="pokemon">Name</option>
                <option value="type">Type</option>
                <option value="attack">Attack</option>
            </select>
            <select v-model="sort.direction">
                <option value="1">Asc</option>
                <option value="-1">Dec</option>
            </select>
            </label>
            </div>
        <div class="form-button" v-else>
            <button @click="show = true">Search the Pokemons</button>
        </div>
    </header>
    
</template>

<script>
export default {
  props: {
    filter: Object,
    types: Array,
    sort: Object
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
.header {
    padding: 20px;
    background: #006388;
    margin-bottom: 40px;
    box-shadow: 5px 10px 10px grey;
}

.title {
    color: #D1FF70;
}


</style>
