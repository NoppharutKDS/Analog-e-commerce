<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue'

import { useUserProductStore } from '@/stores/user/product'
import { useUserCartStore } from '@/stores/user/cart'

const userProductStore = useUserProductStore()
const userCartStore = useUserCartStore()


const route = useRoute()
const router = useRouter()
const searchText = ref('')

const addToCart = (productData) => {
  userCartStore.addToCart(productData)
  router.push({ name: 'cart' })
}

watch(() => route.query.q, (newSearchText) => {
  searchText.value = newSearchText
}, { immediate: true })

const filterProducts = computed(() => {
    return userProductStore.filterProdcuts(searchText.value)
})
</script>

<template>
  <UserLayout>
    <div class="m-10">
      <h1 class="text-3xl">Search: <span class="font-bold">{{ searchText }}</span></h1>
    </div>
    <div v-if="filterProducts.length > 0">
      <Product
        :products="filterProducts"
        :addToCart="addToCart">
      >
      </Product>
    </div>
    <div class="m-10" v-else>
      <div class="text-center text-3xl">Product not found</div>
    </div>
  </UserLayout>
</template>