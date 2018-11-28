<template>
    <li>
        <!-- <img :src="" /> -->
        <div class="info">
            <h3>{{ pokemon.pokemon }}</h3>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        animal: Object
    }
};
</script>

<style>
img {
    width: 100%;
    max-width: 300px;
}

h3 {
    margin: 0;
}
</style>
