<template>
  <div>
    <div class="grid grid-cols-2 text-4xl mb-32">
      <div class="items bg-gray-100">
        <img
          class="px-48 py-24 shadow-xs h-full object-cover w-full"
          :src="test[0].image"
          alt=""
        />
      </div>
      <div
        class="items bg-custom-100 justify-around text-left flex flex-col text-blue-100 p-2 px-64 py-12"
      >
        <div class="flex flex-col">
          <div class="flex text-3xl text-custom-200">
            <span class="mdi mdi-star"></span>
            <span class="mdi mdi-star"></span>
            <span class="mdi mdi-star"></span>
            <span class="mdi mdi-star-outline"></span>
            <span class="mdi mdi-star-outline"></span>
            <span class="ml-auto mdi mdi-heart"></span>
          </div>
          <div class="text-4xl tracking-widest">
            {{ test[0].title }}
          </div>
          <div class="text-2xl py-4">
            product Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ad, aspernatur! Maiores hic minus tenetur alias eius praesentium
            iure corrupti vitae?
          </div>
          <div class="text-5xl">
            {{ test[0].price }}
          </div>
          <div class="text-3xl mt-6">
            Tags:
            <div class="flex mt-4 ">
              <span class="tags">HD</span>
              <span class="tags">Camera</span>
            </div>
          </div>
        </div>
        <div
          class="mb-6 select-none flex justify-between relative h-auto items-center"
        >
          <div
            class="bg-custom-200 active:bg-custom-400 text-blue-750 px-5 py-2 cursor-pointer text-center flex justify-between mr-4 rounded-md flex-grow"
          >
            <button class="">Add to cart</button>
            <span class="mdi mdi-cart"></span>
          </div>
          <input
            class="text-custom-400 w-1/4 rounded-md px-3 h-full overflow-hidden"
            type="number"
            name="qty"
            id="qty"
            v-model="quantity"
            min="1"
            max="100"
            step="1"
          />
          <div
            class="text-1xl flex flex-col absolute inset-y-0 h-full text-blue-750 text-custom-400 right-0"
          >
            <span
              @click="quantity++"
              class=" h-1/2 w-10 outline-none text-center leading-none cursor-pointer rounded-tr-md hover:bg-custom-200 hover:text-blue-100"
              >&plus;</span
            >
            <span
              @click="quantity--"
              class=" h-1/2 w-10 outline-none text-center leading-none cursor-pointer rounded-br-md hover:bg-custom-200 hover:text-blue-100"
              >&minus;</span
            >
          </div>
        </div>
      </div>
    </div>
    <Related class="mb-24" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Related from "@/components/Related.vue";

@Component({
  components: {
    Related,
  },
})
export default class ProductDetails extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() icon!: string;
  quantity: number = 1;
  get product() {
    return this.$store.state.products.find((product) => {
      product.slug == this.$route.query.slug;
    });
  }
  test: Array<object> = [
    {
      image: `https://images.unsplash.com/photo-1504093376055-b3094b674dcb?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      title: "Long Tshirt with stripes",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      title: "Women's",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1529738097101-93c2129413ed?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80`,
      title: "Bags",
      price: "$1000.00",
    },
    {
      image: `https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      title: "Shoes",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      title: "Clothing",
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
.mdi {
  cursor: pointer;
}

.items {
  height: calc(100vh - 15rem);
  //   align-content: center;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

#qty + div {
  //   right: 1rem;
  top: 0;
}

.tags {
  @apply bg-custom-200 rounded-full text-xl w-24 mx-1 py-1 text-center text-blue-750;
}
</style>
