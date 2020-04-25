<template>
  <div class="grid grid-cols-4 grid-rows-2 gap-4 text-4xl px-8">
    <div
      class="c-wrapper relative col-start-1 col-end-3 row-start-1 row-end-3 bg-blue-750 cursor-pointer"
    >
      <img
        class="block w-full h-full object-cover"
        :src="test[0].image"
        alt=""
      />
      <span class="c-text text-blue-100 text-8xl font-bold">{{
        test[0].title
      }}</span>
    </div>
    <div
      class="c-wrapper cursor-pointer relative bg-blue-750"
      v-for="each in restCategories"
      :key="each.title"
    >
      <img class=" block w-full h-full object-cover" :src="each.image" alt="" />
      <span
        class="c-text-1 absolute bottom-0 right-0 text-blue-100 text-5xl font-bold"
        >{{ each.title }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class CategoryCard extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() icon!: string;
  test: Array<object> = [
    {
      image: `https://images.unsplash.com/photo-1504093376055-b3094b674dcb?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      title: "Men's Collection",
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
.c-wrapper {
  position: relative;

  .c-text {
    position: absolute;
    bottom: 0;
    // display: none;
    right: 1rem;
    word-break: break-all;
    transition: all 1s ease-in-out;
  }

  &:hover {
    .c-text {
      // display: inline;
      bottom: 0;
      transform: translateY(-5rem);
    }
  }
  .c-text-1 {
    position: absolute;
    bottom: 0;
    // display: none;
    right: 1rem;
    word-break: break-all;
    transition: all 0.7s ease-in-out;
  }

  &:hover {
    .c-text-1 {
      // display: inline;
      bottom: 0;
      transform: translate(-2rem, -2rem);
    }
  }
}
</style>
