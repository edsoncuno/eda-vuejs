<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    items: Array,
});

</script>
<template>
    <header>
        <nav>
            <RouterLink v-for="item in items" :to="item.to">
                {{ item.name }}
            </RouterLink>
        </nav>
    </header>
</template>
<style scoped lang="scss">
header {
    width: 100%;
    height: 100%;
    background-color: black;

    nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        a {
            text-decoration: none;
            color: white;
            font-size: 2rem;
        }
    }
}
</style>