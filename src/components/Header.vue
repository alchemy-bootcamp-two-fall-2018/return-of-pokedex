<template>
    <header>
        <label>
            <span><strong>Name: </strong></span>
            <input type="text" v-model="filter.pokemon">
        </label>

        <label>
            <span><strong>Attack: </strong></span>
            <input type="number" v-model="filter.attack">
        </label>

        <label>
            <span><strong>Defense: </strong></span>
            <input type="number" v-model="filter.defense">
        </label>

        <label>
            <span><strong>Type Filter: </strong></span>
            <select v-model="filter.type_1">
                <option value="">All</option>
                <option
                    v-for="type1 in types"
                    :key="type1"
                    :value="type1">
                    {{type1}}
                </option> 
            </select>
        </label>


        <label>
            <span><strong>Sort By:</strong></span>
            <select v-model="sort.field">
                <option value="">All</option>
                <option value="type">Type 1</option>
                <option value="attack">Attack Points</option>
                <option value="defense">Defense Points</option>
            </select>

        </label>
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

<style>
header {
    padding: 20px;
    background: rgb(28, 117, 201);
    color: whitesmoke;
}

label {
    display: flex;
    padding: 3px;
}

span {
    display: inline-block;
    width: 100px;
}

textarea, input, select {
    width: 150px;
    height: 15px;
}
</style>
