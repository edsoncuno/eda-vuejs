<script setup>
import { RouterView } from 'vue-router'
import Header from "./header/Header.vue";
import SmallHeader from "./header/SmallHeader.vue";
import SmallSidebar from "./header/SmallSidebar.vue";
import { ref } from 'vue';

const itemsLinks = ref([
    { to: "/", name: "Inicio" },
    { to: "/circular-linked-list", name: "Circular Linked List" }
]);

const isActiveSmallSidebar = ref(false);

function handleSmallSidebar() {
    if (isActiveSmallSidebar.value) {
        isActiveSmallSidebar.value = false;
    } else {
        isActiveSmallSidebar.value = true;
    }
}

function hiddenSmallSidebar() {
    isActiveSmallSidebar.value = false;
}

</script>

<template>
    <div class="layout">
        <div class="header">
            <Header :items="itemsLinks" />
        </div>
        <div class="smallheader">
            <SmallHeader :do="handleSmallSidebar" />
        </div>
        <div class="smallsidebar" :class="{ activesmallsidebar: isActiveSmallSidebar }">
            <SmallSidebar :do="hiddenSmallSidebar" :items="itemsLinks" />
        </div>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style scoped lang="scss">
.layout {
    width: 100%;
    height: 100%;
    position: relative;

    .header {
        width: 100%;
        height: 10vh;
        position: fixed;
        top: 0;
        left: 0;
    }

    main {
        background-color: aqua;
        margin-top: 10vh;
        width: 100%;
    }

    .smallheader {
        display: none;
        width: 100%;
        height: 10vh;
        position: fixed;
        top: 0;
        left: 0;
    }

    .smallsidebar {
        width: 0%;
        height: auto;
        position: fixed;
        top: 10vh;
        left: 0;
        transition: all 0.3s;
    }

    .activesmallsidebar {
        width: 100%;
    }

    @media all and (max-width: 630px) {
        .header {
            display: none;
        }

        .smallheader {
            display: block;
        }
    }
}
</style>