<template>
    <header>
        <div class="form" v-if="show">
        <transition name="fade">
        </transition>
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
            <button @click="show = true"> Sort through the Pokedex </button>   
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

<style lang="postcss">

header {
    text-align: center;
    background-color: pink;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0; 

    span {
        display: inline-block;
        width: 90px;
    }
    textarea, input, select {
        width: 200px;
        border: 1pt black solid;
    }
    textarea {
        height: 75px;
    }
}
.form-button {
    padding: 10px 10px 10px 10px; 
  
}
</style>
