import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('product', {
  state: () => ({
    list: [{
      name: 'Weather Sevice',
      imageUrl: 'https://static.wikia.nocookie.net/local58/images/e/e1/CamB.png',
      quantity: 10,
      writer: 'Local 58',
      price: 100,
    },
    {
      name: 'Fastest Available Route',
      imageUrl: 'https://static.wikia.nocookie.net/local58/images/d/d5/Creature.png',
      quantity: 10,
      writer: 'Local 58',
      price: 100,
    },
    {
      name: 'The Boiled One',
      imageUrl: 'https://static.wikia.nocookie.net/analog-horror-0/images/8/8a/THE_BOILED_ONE_PHENOMENON_RkbIjuVZ_54-HQ.jpg',
      quantity: 10,
      writer: 'Doctor Nowhere',
      price: 100,
    }]
  }),
  actions: {
    filterProdcuts (searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  }
})