import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@mdi/font/css/materialdesignicons.css";

import "./assets/css/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
