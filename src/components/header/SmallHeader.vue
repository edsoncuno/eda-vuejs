<script setup>
const props = defineProps({
    do: Function
});
</script>

<template>
    <header>
        <div class="menubar" @click="props.do">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

header {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    padding: 0rem 2rem;

    .menubar {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fa {
        font-size: 3rem;
        color: white;
    }
}
</style>