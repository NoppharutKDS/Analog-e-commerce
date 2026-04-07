<script setup>
import { RouterLink } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'

import { useUserCartStore } from '@/stores/user/cart'
import CheckoutView from './CheckoutView.vue'

const cartStore = useUserCartStore()

const changeQuality = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}


</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
        <div class="flex">
            <div class="flex-auto w-64 p-4 bg-base-300">
                <div v-if="cartStore.items.length === 0">
                    Your cart is empty
                </div>
                <div v-else v-for="(item, index) in cartStore.items" class="flex">
                    <div class="flex-1">
                        <img class="w-full p-8" :src="item.imageUrl">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                                <div class="relative grid grid-cols-2">
                                    <div>
                                        <div><b>{{ item.name }}</b></div>
                                        <div><b>Creator:</b> {{ item.writer }}</div>
                                        <div><b>Unit Price:</b> {{ item.price }}</div>
                                    </div>
                                    <div>
                                        <select v-model="item.quantity" class="w-1/2 px-4" @change="changeQuality($event, index)">
                                            <option v-for="quantity in [1,2,3,4,5]">
                                                {{ quantity }}
                                            </option>
                                        </select>
                                    </div>
                                    <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0">
                                        <Close></Close>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div><b>In Stock</b></div>
            </div>
            <div class="flex-auto w-32 p-4 bg-slate-600">
                <h2 class="text-2xl"><b>Order summary</b></h2>
                <div class="mt-4 m-0 divide-y divide-base-200">
                    <div class="flex align-middle justify-between py-2">
                        <div class="font-bold">Subtotal</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex align-middle justify-between py-2">
                    <div class="font-bold">Shipping</div>
                    <div>0</div>
                    </div>
                    <div class="flex align-middle justify-between py-2">
                        <div class="font-bold">Total</div>
                        <div>{{ cartStore.summaryPrice }}</div>
            </div>
            <RouterLink :to="{name : 'checkout'}" class="btn btn-outline btn-warning w-full mt-4">
                Checkout
            </RouterLink>
                </div>
            </div>
        </div>

    </UserLayout>
</template>