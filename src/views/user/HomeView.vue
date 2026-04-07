<script setup>
import { useRouter } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue';

import { useUserProductStore } from '@/stores/user/product'
import { useUserCartStore } from '@/stores/user/cart'

const router = useRouter()
const userProductStore = useUserProductStore()
const userCartStore = useUserCartStore()

const addToCart = (productData) => {
  userCartStore.addToCart(productData)
  router.push({ name: 'cart' })
}

</script>

<template>
    <UserLayout>
    <div class="hero h-96" style="background-image: url(https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/01/analog-horror.jpg?w=1200&h=675&fit=crop);">
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
                <h1 class="mb-4 text-4xl font-bold">A Better Reality is Just a Click Away</h1>
                <p class="mb-5">Join the thousands of satisfied citizens who have traded their burderns for Bliss. Side effects may includ memory loss, spatial displacement, and [DATA REDACTED]
                </p>
            </div>
        </div>
    </div>
       <Product 
        :products="userProductStore.list"
        :addToCart="addToCart">
    </Product>
    </UserLayout>
</template>
