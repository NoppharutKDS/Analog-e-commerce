<script setup>
import { ref, onMounted } from 'vue';
import UserLayout from '@/layouts/UserLayout.vue'

import { useUserCartStore } from '@/stores/user/cart'

const cartStore = useUserCartStore()
const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderId) {
        orderData.value = cartStore.checkout
    }
})
</script>

<template>
    <UserLayout>
        <div class='max-w-2xl mx-auto border border-base-200 shadow-xl p-8'>
            <div>
                <div class='text-2xl font-bold'>Thank you for your purchase!</div>
                <div>Hi! {{ orderData.name }}</div>
                <div>We've recieved your order will ship in 2-3 business days.</div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-4 gap-2">
                <div>
                    <div>Order Date</div>
                    <div> {{ orderData.orderDate }}</div>
                </div>
                <div>
                    <div>Order Number</div>
                    <div> {{ orderData.orderId }}</div>
                </div>
                <div>
                    <div>Payment Method</div>
                    <div> {{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div>Address</div>
                    <div> {{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 mb-4 items-center">
                <div>
                    <img class='w-full' :src='product.imageUrl'>
                </div>
                <div>
                    <b>{{ product.name }}</b>
                </div>
                <div>
                    Quantity: {{ product.quantity }}
                </div>
                <div>
                    Subtotal: {{ product.price * product.quantity }}
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div><b>Total</b></div>
                <div> {{ orderData.totalPrice }} </div>
            </div>
        </div>
    </UserLayout>
</template>