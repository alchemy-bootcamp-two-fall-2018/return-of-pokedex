<template>
    <header>
        <label>
            Type:   
            <input
            v-model="filter.type"
            >
        </label>
</template>

<script>
export default {

  props: {
    filter: Object
  }
};
</script>

<style>
header {
background: black;
color: white;
padding: 10px;
}

</style>
