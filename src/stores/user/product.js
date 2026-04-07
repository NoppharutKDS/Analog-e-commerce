import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('product', {
  state: () => ({
    list: [{
      name: 'Weather Sevice',
      imageUrl: 'https://static.wikia.nocookie.net/local58/images/e/e1/CamB.png',
      quantity: 1,
      writer: 'Local 58',
      price: 100,
    },
    {
      name: 'Fastest Available Route',
      imageUrl: 'https://static.wikia.nocookie.net/local58/images/d/d5/Creature.png',
      quantity: 1,
      writer: 'Local 58',
      price: 100,
    },
    {
      name: 'The Boiled One',
      imageUrl: 'https://static.wikia.nocookie.net/analog-horror-0/images/8/8a/THE_BOILED_ONE_PHENOMENON_RkbIjuVZ_54-HQ.jpg',
      quantity: 1,
      writer: 'Doctor Nowhere',
      price: 100,
    },
    {
      name: 'Anklager',
      imageUrl: 'https://static.wikia.nocookie.net/doctor-nowhere-creatures/images/2/28/Anklager1.png',
      quantity: 1,
      writer: 'Doctor Nowhere',
      price: 100,
    },
    {
      name: 'Thanks for Playing!',
      imageUrl: 'https://static.wikia.nocookie.net/analog-horror-0/images/6/65/Thanks.jpg',
      quantity: 1,
      writer: 'Xploshi',
      price: 100,
    }]
  }),
  actions: {
    filterProdcuts (searchText) {
      const q = searchText.toLowerCase().trim()
      return this.list.filter(product => 
        product.name.toLowerCase().includes(q) ||
        (product.writer && product.writer.toLowerCase().includes(q))
      )
    }
  }
})