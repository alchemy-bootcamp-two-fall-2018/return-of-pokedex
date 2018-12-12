<template>
    <header>
        <div class="form" v-if="show">
        <label>
            Name:
            <input type="text" v-model="filter.name">
        </label>
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
            Ability: 
            <select v-model="filter.ability">
                <option value="">All</option>
                <option 
                v-for="ability in abilities"
                v-bind:key="ability"
                v-bind:value="ability">
                {{ability}}
                </option>
            </select>
        </label>
        <label>
            Sort By:  
            <select v-model="sort.field">
                <option value="">All</option>
                <option value="weight"> Weight </option>
                <option value="attack"> Attack </option>
            </select>
        </label> 
        </div>
        <div class="form-button" v-else>
            <button @click="show = true"> Show Form </button>   
        </div>
    </header>
</template>

<script>
export default {
    props: {
        filter: Object,
        types: Array,
        abilities: Array, 
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
header {
    text-align: center;
}

section {
  background: #aaa;
  padding: 10px;
}
label {
    display: flex;
    padding: 3px;
}
span {
      display: inline-block;
      width: 90px;
}
textarea, input, select {
      width: 200px;
}
textarea {
      height: 75px;
}
</style>
