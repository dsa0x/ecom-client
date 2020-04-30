import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetails from "../views/ProductDetails.vue";
import Auth from "../views/Auth.vue";
import Products from "../views/Products.vue";
import RegisterForm from "../components/RegisterForm.vue";
import LoginForm from "../components/LoginForm.vue";
import CreateProduct from "../components/CreateProduct.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/auth/",
        name: "Auth",
        component: Auth,
        children: [
          {
            path: "/auth/register",
            name: "Register",
            component: RegisterForm,
          },
          {
            path: "/auth/login",
            name: "Login",
            component: LoginForm,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/product/",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/products/",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/new",
    name: "CreateProduct",
    component: CreateProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
