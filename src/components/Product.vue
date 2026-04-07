✅ Full Product.vue
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  products: Array,
  addToCart: Function
})

const creepyMessages = [
  "DO NOT TRUST THIS",
  "IT'S WATCHING YOU",
  "ERROR: REALITY UNSTABLE",
  "THIS SHOULD NOT EXIST",
  "THEY KNOW YOU CLICKED"
]

const getCreepyText = (product) => {
  if (!product._creepyText) {
    product._creepyText =
      creepyMessages[Math.floor(Math.random() * creepyMessages.length)]
  }
  return product._creepyText
}
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10">
    <div 
      v-for="product in products" 
      :key="product.id"
      class="group relative card bg-base-100 w-full shadow-sm overflow-hidden"
    >
        <figure class="relative overflow-hidden">
        <div class="creepy-overlay">{{ getCreepyText(product) }}</div>
        <div class="cam-label">CAM {{ Math.floor(Math.random() * 9) + 1 }}</div>
        <img class="w-full h-60 object-cover" :src="product.imageUrl"/>
        </figure>
        <div class="card-body">
            <h2 class="card-title glitch-title" :data-text="product.name">{{ product.name }}</h2>
            <p>By {{ product.writer }}</p>
            <div class="card-actions justify-end">
                <button 
                    class="bg-[#334155] hover:bg-base-300 
                        text-white font-medium 
                        px-4 py-2 rounded-lg
                        transition duration-200
                        shadow-md hover:shadow-lg"
                        @click="addToCart(product)"
                    >
                    Buy Now
                </button>
            </div>
        </div>
    </div>
  </section>
</template>