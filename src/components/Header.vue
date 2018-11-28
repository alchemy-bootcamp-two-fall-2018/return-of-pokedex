<template>
  <header>
    <label>
      Attack:
      <input type="number" v-model.number="filter.attack" >
    </label>
  </header>    
</template>

<script>
export default {
    props: {
        filter:Object
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
