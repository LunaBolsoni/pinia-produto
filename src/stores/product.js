import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Naruto', price: 1111.00, qty: 1 },
    { id: 2, name: 'Itachi', price: 100000.00, qty: 5 },
    { id: 3, name: 'Kakashi', price: 99999999.00, qty: 7 },
    { id: 4, name: 'Hinata', price: 1293124098.00, qty: 2 },
    { id: 5, name: 'Tsunade', price: 8888888.00, qty: 1}
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
