<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/product';
const props = defineProps(['id'])
const productStore = useProductStore()
const product = ref({})

onMounted(() => {
        product.value = productStore.getProductById(props.id)
})
</script>

<template>
        <h1> Detalhes do Produto - {{ id }}</h1>
        <h2>Nome: {{ product.name }}</h2>
        <h2>Preço: {{ product.price }}</h2>
        <h2>Estoque: {{ product.qty }}</h2>
        <hr />
        <h2 v-for="(value, key) in product" :key="key"> {{ key }}: {{ value }}</h2>
</template>