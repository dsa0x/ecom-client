<template>
  <div class=" product-grid text-4xl px-8">
    <div :key="item" v-for="item in test" class="grid relative cursor-pointer">
      <img :src="item.image" alt="" class="w-full h-full bg-top object-cover" />
      <!-- <div class="grid grid-cols-6 py-4 cursor-pointer">
        <span class="mdi mdi-eye bg-blue-650"></span>
        <div
          class="cart-btn text-blue-650 text-2xl bg-blue-900 col-start-2 col-end-6"
        >
          + Add to Cart
        </div>
        <span class="mdi mdi-heart bg-blue-650"></span>
      </div> -->
      <div
        class="flex flex-col justify-center pl-4 items-start text-gray-500 bg-blue-750 h-24 absolute bottom-0 w-full"
      >
        <span class="text-3xl">{{ item.title }}</span>
        <span class="text-4xl">{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class BestSellerSide extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() icon!: string;
  test: Array<object> = [
    {
      image: `https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=
        eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      title: "Men's Collection",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1508350552147-213c11fcede6?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=800`,
      title: "Women's Shoelaces",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1540924782561-3fc182603b86?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60`,
      title: "Salvatore Begore Sneakers",
      price: "$1000.00",
    },
    {
      image: `https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=
      rb-1.2.1&auto=format&fit=crop&w=900&q=60`,
      title: "MacBook Pro 2020 i9",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80`,
      title: "Striped TShirt",
      price: "$700.00",
    },
  ];

  get restCategories() {
    return this.test.slice(1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  align-content: center;
}

.cart-btn {
  //   justify-self: center;
}
</style>
