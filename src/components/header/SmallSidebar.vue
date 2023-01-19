<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    do: Function,
    items: Array,
});

</script>

<template>
    <nav>
        <RouterLink v-for="item in items" :to="item.to" @click="props.do">
            {{ item.name }}
        </RouterLink>
    </nav>
</template>
<style scoped lang="scss">
nav {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        padding: 1rem 0rem;
    }
}
</style>