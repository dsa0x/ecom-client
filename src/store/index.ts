import Vue from "vue";
import Vuex from "vuex";

import { User } from "@/types/types";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
});
