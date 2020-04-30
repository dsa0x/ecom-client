import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { User } from "@/types/types";
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersistence({
  key: "vuex", // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});

export default new Vuex.Store({
  state: {
    currency: { name: "Euro", symbol: "€", desc: "eur" },
    user: {
      isLoggedIn: false,
      token: null,
    },
    products: {},
    cart: {},
  },
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
      state.products = products;
    },
  },
  actions: {
    setUser({ commit }, { user, token }) {
      if (user) {
        commit("SET_USER", user);
        commit("SET_TOKEN", token);
        commit("SET_LOGGED_IN", true);
      } else {
        commit("SET_LOGGED_IN", false);
      }
    },
  },
  modules: {},
  plugins: [vuexLocalStorage.plugin],
});
