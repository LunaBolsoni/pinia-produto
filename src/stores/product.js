import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: "Harry Poter lá", price:59.9, qty: 100},
    {id: 2, name: "Os miseraveis", price: 179.9, qty: 50},
    {id: 3, name: "O Senhor dos Aneis", price: 199.9, qty: 75},
    {id: 4 , name: "O Hobbit", price: 69.9, qty:200},
    {id: 5, name: "Dumas & Lumsden", price: 149.9, qty: 150}
  ])
  
  return { products }
})
