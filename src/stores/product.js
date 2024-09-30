import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Harry Poter lá', price: 59.9, qty: 100 },
    { id: 2, name: 'Os miseraveis', price: 179.9, qty: 50 },
    { id: 3, name: 'O Senhor dos Aneis', price: 199.9, qty: 75 },
    { id: 4, name: 'O Hobbit', price: 69.9, qty: 200 },
    { id: 5, name: 'Dumas & Lumsden', price: 149.9, qty: 150 }
  ])

  function getProductById(id) {
    //for (let product of products.value){
    //if (product.id === id)
    //return product;
    //}
    //}
    //return null;
    return products.value.find((product) => product.id == id)
  }

  function deleteProductById(id) {
    const pos = products.value.findIndex(product => product.id ==id)
    products.value.splice(pos, 1)
  }
  return { products, getProductById, deleteProductById }
})
