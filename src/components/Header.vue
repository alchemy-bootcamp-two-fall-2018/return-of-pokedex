<template>
    <header>
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
    </header>
</template>

<script>
export default {
    props: {
        filter: Object,
        types: Array,
        abilities: Array, 
    }
}; 
</script>
