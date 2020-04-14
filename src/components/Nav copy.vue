<template>
  <div class="flex flex-col">
    <nav class="nav flex p-5 bg-gray-100 items-center justify-between">
      <ul class="flex w-1/4 justify-around">
        <li class="">
          <a class="" href="#"> <span class="pr-1 mdi mdi-home"></span>Home </a>
        </li>
        <li class="">
          <a class="" href="#"
            ><span class="pr-1 mdi mdi-account"></span>About Us</a
          >
        </li>
        <li class="">
          <a class="" href="#"
            ><span class="pr-1 mdi mdi-message"></span>Contact Us</a
          >
        </li>
      </ul>
      <div>Free shipping on all orders above {{ currency.symbol }}100</div>
      <div class="w-1/5 pointer" @click="toggle">
        {{ currency.symbol }} {{ currency.name }}
      </div>
    </nav>
    <div
      class="border-solid border-gray-300 bg-gray-100 rounded-lg inline-flex self-end mr-20"
    >
      <ul class="">
        <li
          class=" block p-3 w-64 pointer"
          :class="currenc == currency ? 'bg-blue-600' : ''"
          v-for="(currenc, id) in currencyList"
          :key="id"
          @click="setCurrency($ev, currenc)"
        >
          <a class="text-2xl"> {{ currenc.symbol }} {{ currenc.name }} </a>
        </li>
      </ul>
    </div>
    <!-- <nav class=" navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class=" nav collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto w-25 justify-content-between">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <span class="mdi mdi-home"></span>Home
              <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><span class="mdi mdi-account"></span>About Us</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><span class="mdi mdi-message"></span>Contact Us</a
            >
          </li>
        </ul>
        <span class="navbar-text">
          Free shipping on all orders above 100
        </span>

        <ul class="nav-left navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ currency.symbol }} {{ currency.name }}
            </a>
            <div
              class="dropdown-menu rounded-lg"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a
                class="dropdown-item"
                v-for="(currency, id) in currencyList"
                :key="id"
                @click="setCurrency($ev, currency)"
              >
                {{ currency.symbol }} {{ currency.name }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="sub-nav d-flex px-5 py-5">
      <div class="main-title">
        Journal
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">All</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <div class="input-group-append">
          <span class="input-group-text"
            ><span class="mdi mdi-find-replace"></span
          ></span>
        </div>
      </div>
      <div class="d-flex ml-auto w-50">
        <div class="d-flex flex-column">
          <span class=" mdi mdi-account-key"></span>Login
        </div>
        <div class="d-flex flex-column">
          <span class=" mdi mdi-account-multiple-plus"></span>Register
        </div>
      </div>
      <div class="">
        <span class="d-flex flex-column mdi mdi-cart">Cart</span>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  currencyList: Object = {
    euro: { name: "Euro", symbol: "E" },
    usd: { name: "Dollars", symbol: "$" },
    pound: { name: "Pounds", symbol: "P" }
  };

  currency: Object = { name: "Euro", symbol: "§" };

  setCurrency(ev: any, currency: Object) {
    this.currency = currency;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-white: rgba(165, 165, 165, 1);
$bg-main: rgb(44, 44, 57);
$font-default: 1.5rem;

.px-10 {
  padding-left: 6rem !important;
  padding-right: 6rem !important;
}

.nav {
  font-size: 1.3rem;
}

.nav-left {
  width: 10%;
}

.nav-link span {
  padding-right: 0.2rem;
}

.main-title {
  font-size: 3rem;
}

.sub-nav {
  background-color: $bg-main;
  color: $color-white;
}

.pointer {
  cursor: pointer;
}

a {
  //   color: #42b983;
}
</style>
