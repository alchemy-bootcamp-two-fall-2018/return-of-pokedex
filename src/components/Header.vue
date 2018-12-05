<template>
    <header>
        <h1>Poko-Filt-a-Rolo-Dex</h1>
        <fieldset class="filter">
            <label>
                Name:
                <input v-model="filter.pokemon">      
            </label>
            <label>
                Min Weight:
                <input type = "number"
                    v-model.number="filter.weight"
                    min="1"
                    step="1"
                    oninput="validity.valid||(value='')"
                    onfocus="this.value=''"
                >
            </label>
            <label>
                Min Height: 
                <input type = "number"
                    v-model.number="filter.height"
                    min="1"
                    step="1"
                    oninput="validity.valid||(value='')"
                    onfocus="this.value=''"
                >
            </label>
            <label>
                Types:
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
        </fieldset>
        <div class="sorter">
            <label>
                Sort By:
                <select v-model="sort.field">
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
                <select v-model="sort.direction">
                    <option value="1">Ascending</option>
                    <option value="-1">Descending</option>
                </select>
            </label>
        </div>
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

<style scoped>
    header {
        display: inline-block;
        margin: auto;
        background: yellowgreen;
        color: purple;
        padding: 10px;
        width: 100%;
    }
    h1 {
        text-align: center;
        font-size: 3em
    }

    label {
        display: block;
        text-align: center
    }; 
</style>
