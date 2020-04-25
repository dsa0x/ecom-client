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
      <img
        @click="goToProduct(item.id)"
        :src="item.image"
        alt=""
        class="bg-center object-cover scale-down"
      />
      <div class="details grid grid-cols-6 py-4 cursor-pointer  h-24 group">
        <span
          class="mdi mdi-eye bg-custom-300 group-hover:bg-custom-300 group-hover:text-blue-900"
        ></span>
        <div
          class="cart-btn text-gray-500 text-3xl bg-blue-750 group-hover:text-blue-900 group-hover:bg-custom-300
           col-start-2 col-end-6"
        >
          + Add to Cart
        </div>
        <span
          class="mdi mdi-heart bg-custom-300 group-hover:bg-custom-300 group-hover:text-blue-900"
        ></span>
      </div>
      <div
        class="flex flex-col justify-center items-start text-gray-500 bg-blue-1050  z-10"
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

  goToProduct(id) {
    this.$router.push({ name: "ProductDetails", params: { id: id } });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scale-down {
  object-position: center;
  transform: scale(1.2);
  transition: all 0.8s ease-in-out;

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
    transition: all 0.6s;

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &:hover {
    .details {
      bottom: 5rem;
    }
  }
}

.product-grid {
  display: grid;
  gap: 4rem 2rem;
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
