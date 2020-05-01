import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { User } from "@/types/types";
Vue.use(Vuex);

// const vuexLocalStorage = new VuexPersistence({
//   key: "vuex", // The key to store the state on in the storage provider.
//   storage: window.localStorage, // or window.sessionStorage or localForage
//   // Function that passes the state and returns the state with only the objects you want to store.
//   // reducer: state => state,
//   // Function that passes a mutation and lets you decide if it should update the state in localStorage.
//   // filter: mutation => (true)
// });

export default new Vuex.Store({
  state: {
    currency: { name: "Euro", symbol: "€", desc: "eur" },
    user: {
      isLoggedIn: false,
      token: null,
    },
    products: [],
    cart: {
      products: [<any>{}],
      total: null,
    },
  },
  getters: {},
  mutations: {
    SET_USER(state, { user }) {
      state.user = { ...state.user, ...user };
    },
    SET_LOGGED_IN({ user }, loginStatus) {
      user.isLoggedIn = loginStatus;
    },
    SET_TOKEN({ user }, token) {
      user.token = token;
    },
    SET_CURRENCY(state, currency) {
      state.currency = currency;
    },
    ADD_PRODUCTS(state, products) {
      if (products) {
        products.forEach((product) => {
          product.images = product.images.map(
            (img) =>
              `${process.env.VUE_APP_SERVER_URL}/assets/images/${img.url}`
          );
        });
      }
      state.products = products;
    },
    ADD_TO_CART({ cart }, product) {
      const productIndex = cart.products.findIndex((item: any) => {
        return item.id == product._id;
      });
      console.log(product.quantity);
      if (productIndex != -1) {
        cart.products[productIndex].quantity += product.quantity;
        return;
      }
      cart.products.push(product);
    },
    UPDATE_CART({ cart }, products) {
      cart.products = products;
    },
  },
  actions: {
    async setUser({ dispatch, commit }, { user, token }) {
      if (user) {
        commit("SET_USER", user);
        commit("SET_TOKEN", token);
        commit("SET_LOGGED_IN", true);
        await dispatch("addToCart");
      } else {
        commit("SET_LOGGED_IN", false);
      }
    },
    async addToCart({ commit, state }, product?: any) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${state.user.token}`;
      let cart;
      if (product) {
        cart = await axios.post(`${process.env.VUE_APP_SERVER_URL}/cart`, {
          productId: product._id,
          productQuantity: product.quantity,
        });
      } else {
        cart = await axios.get(`${process.env.VUE_APP_SERVER_URL}/cart`);
      }
      console.log(cart);
      commit("UPDATE_CART", cart.data.cart.products);
      // commit("ADD_TO_CART", product);
    },
    async fetchProducts({ commit, state }) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${state.user.token}`;
      const products = await axios.get(
        `${process.env.VUE_APP_SERVER_URL}/products`
      );
      console.log(products.data);
      commit("ADD_PRODUCTS", products.data);
      // commit("ADD_TO_CART", product);
    },
  },
  modules: {},
  // plugins: [vuexLocalStorage.plugin],
});
