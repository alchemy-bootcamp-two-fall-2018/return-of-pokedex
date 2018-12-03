<template>
  <header>
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
  </header>    
</template>

<script>

export default {
   
    props: {
        filter:Object,
        types: Array
    }
};
</script>

<style scoped>
header {
  background: steelblue;
  color: white;
  padding: 10px
}

</style>
