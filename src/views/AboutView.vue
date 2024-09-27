<script setup>
import { useCounterStore} from '@/stores/counter'
const counterStore = useCounterStore ()
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Contador: {{ counterStore.count }}</h2>
    <h2>Dobro do Contador: {{ counterStore.doubleCount }}</h2>
    <button @click="counterStore.increment">+</button>
</div>
</template>

<style scoped>
</style>
