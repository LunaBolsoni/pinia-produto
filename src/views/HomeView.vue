<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product';
const productStore = useProductStore()
 const router = useRouter();

 const visualizar = (id) => {
   router.push(`/product/${id}`);
 }
</script>

<template>
  <h1>Listagem de Produtos</h1>
  <table>
    <thead>
      <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Preço</th>
      <th>Ações</th>
    </tr>
    </thead>
    <tbody>
      <input type="text">
      
      <tr v-for="product in productStore.products" :key="product.id">
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>
        <button @click="visualizar(product.id)">Ver</button>
        <button @click="productStore.deleteProductById(product.id)">Excluir</button>
      </td>
      </tr>
    </tbody>
  </table>
</template>
