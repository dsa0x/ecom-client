import axios from "axios";
import store from "@/store/index";
// import Vue from "vue";

import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class ProductMixin extends Vue {
  get allProducts() {
    return store.state.products;
  }

  async getProducts() {
    if (!store.state.products) {
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
        store.commit("ADD_PRODUCTS", products.data);
      }
    }
  }
}
