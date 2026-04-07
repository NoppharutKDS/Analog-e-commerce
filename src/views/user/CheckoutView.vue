<script setup>
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import { useUserCartStore } from '@/stores/user/cart'

const checkoutForm = [
  {
    name: 'Email Address',
    field: 'email'
  },
  {
    name: 'Name',
    field: 'name'
  },
  {
    name: 'Address',
    field: 'address'
  },
  {
    name: 'Note',
    field: 'note'
  }
]
const router = useRouter()
const cartStore = useUserCartStore()
const checkoutData = reactive({})

const checkout = () => {
  cartStore.placeOrder(checkoutData)
  router.push({ name: 'success' })
}

</script>

<template>
    <UserLayout>
      <h1 class="text-3xl font-bold m-4">Checkout</h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-300">
              <div v-for="form in checkoutForm" class="px-8 py-2">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend"> {{form.name}} </legend>
                    <input v-model="checkoutData[form.field]" type="text" class="input w-full" placeholder="Type here" />
                </fieldset>
              </div>
            </section>

            <section class="flex-auto w-32 bg-[#1E293B] px-2">
              <div v-for="item in cartStore.items" class="flex bg-[#334155] m-6 py-4">
                <div class="flex-1">
                  <img class="w-full p-6" :src="item.imageUrl" />
                </div>
                <div class="flex-1">
                  <div class="flex flex-col justify-between h-full">
                    <div>
                      <div><b> {{item.name}} </b></div>
                      <div>Quantity: {{ item.quantity }}</div>
                    </div>
                  <RouterLink :to="{name : 'cart'}"> Edit </RouterLink>
                  </div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="p-4 mb-4">
                <div><b>Order Summary</b></div>
                <div class="flex justify-between">
                  <div>Total:</div>
                  <div>{{ cartStore.summaryPrice }}</div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="mb-4">
                <button class="btn btn-outline btn-warning w-full mt-4" @click="checkout()">
                Pay now
                </button>
              </div>
            </section>
        </div>
    </UserLayout>
</template>