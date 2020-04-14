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
      <div class="w-1/4 pointer flex justify-around" @click="toggle">
        {{ currency.symbol }} {{ currency.name }} &#9662;
        <span v-show="isLoggedIn">Welcome DSA</span>
      </div>
    </nav>
    <div
      v-show="isOpen"
      class="border-solid border-gray-300 bg-gray-100 rounded-lg inline-flex self-end mr-20 z-50"
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
    <div class="p-10 bg-gray-900 flex items-center">
      <div class="text-6xl text-gray-200">JOURNAL</div>
      <div class="w-5/12 ml-16 flex relative">
        <input
          type="text"
          name=""
          class="bg-gray-200 text-gray-700 border border-gray-200 rounded-lg overflow-hidden py-6 text-2xl
          px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
          placeholder="Search Products..."
          autocomplete="false"
          id="search"
        />
        <span
          class="absolute text-5xl mdi mdi-shield-search h-full right-0
          bg-blue-650 hover:bg-blue-500 px-2 cursor-pointer rounded-r-lg"
        ></span>
      </div>
      <div class="flex text-2xl justify-around flex-grow">
        <div
          class="flex flex-col text-gray-500 hover:text-gray-100 cursor-pointer"
        >
          <span class=" text-5xl mdi mdi-account-key"></span>Login
        </div>
        <div
          class="flex flex-col text-gray-500 hover:text-gray-100 cursor-pointer"
        >
          <span class="text-5xl mdi mdi-account-multiple-plus"></span>Register
        </div>
        <div
          class="flex flex-col text-gray-500 hover:text-gray-100 cursor-pointer"
        >
          <span class="text-5xl mdi mdi-cart"></span>Wishlist
        </div>
        <div
          class="flex flex-col text-gray-500 hover:text-gray-100 cursor-pointer"
        >
          <span class="text-5xl mdi mdi-cart"></span>Cart
        </div>
      </div>
    </div>
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
  isOpen: Boolean = false;
  isLoggedIn: Boolean = true;

  setCurrency(ev: any, currency: Object) {
    this.currency = currency;
  }

  toggle() {
    this.isOpen = !this.isOpen;
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

.flex-2 {
  flex-grow: 2;
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
