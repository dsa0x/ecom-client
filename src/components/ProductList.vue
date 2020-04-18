<template>
  <div class=" product-grid text-4xl px-8">
    <div class="title col-start-end text-gray-500 flex justify-between">
      <span class="font-bold">{{ title }}</span>
      <span class="hover:text-blue-650 cursor-pointer">view all &rarr;</span>
    </div>
    <div
      :key="item.image"
      v-for="item in products"
      class="grid whole-grid relative cursor-pointer overflow-hidden"
    >
      <img :src="item.image" alt="" class="bg-top object-cover scale-down" />
      <div class="details grid grid-cols-6 py-4 cursor-pointer  h-24 group">
        <span class="mdi mdi-eye bg-blue-650"></span>
        <div
          class="cart-btn text-gray-500 text-2xl bg-blue-750 group-hover:bg-blue-650 col-start-2 col-end-6"
        >
          + Add to Cart
        </div>
        <span class="mdi mdi-heart bg-blue-650"></span>
      </div>
      <div
        class="flex flex-col justify-center pl-4 items-start text-gray-500 bg-blue-750 group-hover:bg-blue-750 z-10"
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
export default class ProductList extends Vue {
  @Prop() title!: string;
  @Prop() products!: string;
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
    {
      image: `https://images.unsplash.com/photo-1585159812874-5b84415c0091?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=811&q=80`,
      title: "Striped Jeans",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1586898936421-67ffc8e3a5b5?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80`,
      title: "Striped Sac",
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
.scale-down {
  transform: scale(1.4);
  transition: all 0.5s;

  &:hover {
    filter: brightness(90%);
    transform: scale(1);
  }
}

.whole-grid {
  .details {
    position: absolute;
    height: 7rem;
    width: 100%;

    bottom: 0;
    transition: all 1s;
  }

  &:hover {
    .details {
      bottom: 5rem;
    }
  }
}

.product-grid {
  display: grid;
  gap: 2rem 4rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

  align-content: center;
}

.title {
  grid-column: 1/-1;
  transform: translateY(1rem);
}

.col-start-end {
  grid-column: 1/-1;
}

img {
  height: 30rem;
  width: 100%;
}

.cart-btn {
  //   justify-self: center;
}
</style>
