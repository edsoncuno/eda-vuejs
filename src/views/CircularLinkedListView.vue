<script setup>
import { ref } from 'vue';

const value = ref("");
function mostrarValor() {
    console.log(value.value);
}
/**
 * 
 * 
 * const newCircularLinkedList = new CircularLinkedList();

    const add = (index, value) => {
        let newNode = { value: value, next: {} }
        try {
            newCircularLinkedList.add(index, newNode);
            console.log(newCircularLinkedList.toArray());
            refresh();
        } catch (error) {
            alert(error.message);
        }
    }

    const remove = (index) => {
        try {
            newCircularLinkedList.remove(index);
            console.log(newCircularLinkedList.toArray());
            refresh();
        } catch (error) {
            alert(error.message);
        }
    }

    const clear = () => {
        newCircularLinkedList.clear();
        console.log(newCircularLinkedList.toArray());
        refresh();
    }

    const refresh = () => {
        setCllStr(newCircularLinkedList.toString());
    }
 * 
 */
</script>

<template>
<div>Estoy en circular linkes list</div>
<div>
    <input v-model="value" />
</div>
<button @click="mostrarValor">Mostrar valor</button>
</template>

<style scoped lang="scss">
</style>