<template>
  <div>
    <ProductList :title="title" :products="products" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ProductList from "./ProductList.vue";

@Component({
  components: {
    ProductList,
  },
})
export default class PopularProducts extends Vue {
  title: string = "Popular Products";
  products: Array<object> = [
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
