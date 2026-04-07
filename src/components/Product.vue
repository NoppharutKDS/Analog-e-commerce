<script setup>
import { defineProps } from 'vue'

defineProps({
  products: Array,
  addToCart: Function
})
</script>

<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10">
        <div v-for="product in products" class="card bg-base-100 w-full shadow-sm">
            <figure>
                <img class="w-full" :src="product.imageUrl"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ product.name }}</h2>
                <p>{{ product.writer }}</p>
                <div class="card-actions justify-end">
                    <button class="
                    bg-[#334155] hover:bg-base-300 
                    text-white font-medium 
                    px-4 py-2 rounded-lg
                    transition duration-200
                    shadow-md hover:shadow-lg" 
                    @click="addToCart(product)">Buy Now</button>
                </div>
            </div>
        </div>
    </section>
</template>