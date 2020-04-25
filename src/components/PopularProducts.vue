<template>
  <div>
    <ProductList :title="title" :products="allProducts" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ProductList from "./ProductList.vue";
import axios from "axios";
import { productMixin } from "@/mixins/productMixin";

@Component({
  components: {
    ProductList,
  },

  // mixins: [productMixin],
})
export default class PopularProducts extends Vue {
  title: string = "Popular Products";

  get allProducts() {
    return this.$store.state.products;
  }

  async getProducts() {
    if (!this.$store.state.products.length) {
      const products = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/products`
      );
      if (products) {
        products.data.forEach((product) => {
          product.images = product.images.map(
            (img) =>
              `${process.env.VUE_APP_SERVER_URL}/assets/images/${img.url}`
          );
        });
        this.$store.commit("ADD_PRODUCTS", products.data);
      }
    }
  }
  async mounted() {
    await this.getProducts();
  }

  products: Array<object> = [
    {
      image: `https://images.unsplash.com/photo-1562869319-a1368ba7fe75?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      title: "Men's Collection",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1501728636520-11c972bd5e2e?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80`,
      title: "Women's Shoelaces",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/flagged/photo-1556637174-70445fe8b11e?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      title: "Bang and Olufsen Speakers",
      price: "$1000.00",
    },
    {
      image: `https://images.unsplash.com/photo-1576074650260-a70e940351cb?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      title: "MacBook Pro 2020 i9",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1584734484941-1ff360f3e3c0?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      title: "Yeezy 2020",
      price: "$7000.00",
    },
    {
      image: `https://images.unsplash.com/photo-1530826902532-086e66f7a419?ixlib=
      rb-1.2.1&auto=format&fit=crop&w=1949&q=80`,
      title: "Striped Jeans",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1551081717-5574f25d3a21?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      title: "Apple Watch 3",
      price: "$700.00",
    },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
