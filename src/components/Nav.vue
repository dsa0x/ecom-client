<template>
  <div class="flex flex-col relative h-64 fixed top-0 overflow-hidden">
    <nav class="nav flex bg-gray-100 h-16 items-center justify-between ">
      <ul class="flex w-1/4 justify-around">
        <li class="">
          <a class="hover:text-gray-600" href="#">
            <span class="pr-1 mdi mdi-home "></span>Home
          </a>
        </li>
        <li class="">
          <a class="hover:text-gray-600" href="#"
            ><span class="pr-1 mdi mdi-account"></span>About Us</a
          >
        </li>
        <li class="">
          <a class="hover:text-gray-600" href="#"
            ><span class="pr-1 mdi mdi-message"></span>Contact Us</a
          >
        </li>
      </ul>
      <div>Free shipping on all orders above {{ currency.symbol }}100</div>
      <div class="w-1/4 flex h-full justify-around ">
        <span v-show="isLoggedIn">Welcome DSA</span>
        <span
          class="w-1/2 h-full flex relative pointer"
          @mouseleave="isOpen = false"
        >
          <span class="h-full flex items-center" @click="isOpen = !isOpen">
            {{ currency.symbol }} {{ currency.name }} &#9662;
          </span>
          <transition name="fade">
            <div
              v-show="isOpen"
              class=" overflow-hidden border-solid border-gray-300 bg-gray-100 rounded-lg inline-flex 
          self-end z-50 absolute right-0 dropdown-custom shadow-xl"
            >
              <ul class="">
                <li
                  class=" block p-3 w-64 pointer hover:bg-gray-800 hover:text-blue-200 hover:text-gray-500"
                  v-for="(currenc, id) in currencyList"
                  :key="id"
                  @click="setCurrency(currenc)"
                >
                  <a class="text-2xl">
                    {{ currenc.symbol }} {{ currenc.name }}
                  </a>
                </li>
              </ul>
            </div>
          </transition></span
        >
      </div>
    </nav>

    <div class="p-10 bg-gray-900 flex items-center absolute bottom-0 w-full">
      <div class="text-6xl text-gray-200">JOURNAL</div>
      <div class="w-1/2 ml-16 flex relative items-stretch">
        <span
          class="flex bg-blue-650 text-white text-3xl active:bg-blue-600 text-center py-6 px-3 cursor-pointer rounded-l-lg"
          >All &#9662;</span
        >
        <input
          type="text"
          name=""
          class="bg-gray-200 text-gray-700 border border-gray-200 rounded-r-lg overflow-hidden py-6 text-3xl
          px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
          placeholder="Search Products..."
          autocomplete="false"
          id="search"
        />
        <span
          class="absolute text-5xl mdi mdi-shield-search h-full right-0
          bg-blue-650 text-white active:bg-blue-600 px-3 pt-2 cursor-pointer rounded-r-lg"
        ></span>
      </div>
      <div class="flex text-2xl justify-around flex-grow ml-16">
        <div
          class="flex flex-col text-gray-500 hover:text-gray-100 active:text-gray-300 cursor-pointer"
        >
          <span class=" text-5xl mdi mdi-account-circle"></span>Login
        </div>
        <div
          class="flex flex-col text-gray-500 hover:text-gray-100 active:text-gray-300  cursor-pointer"
        >
          <span class="text-5xl mdi mdi-account-multiple-plus"></span>Register
        </div>
        <div
          class="flex flex-col text-gray-500 hover:text-gray-100 active:text-gray-300  cursor-pointer"
        >
          <span class="text-5xl mdi mdi-heart-outline"></span>Wishlist
        </div>
        <div
          class="flex flex-col text-gray-500 hover:text-gray-100 active:text-gray-300  cursor-pointer"
        >
          <span class="text-5xl mdi mdi-cart"></span>Cart
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  @Prop() private msg!: string;

  currencyList: Object = {
    euro: { name: "Euro", symbol: "€" },
    usd: { name: "US Dollars", symbol: "$" },
    pound: { name: "Pounds", symbol: "£" },
  };
  currency: Object = { name: "Euro", symbol: "€" };
  isOpen: Boolean = false;
  isLoggedIn: Boolean = false;

  setCurrency(currency: Object) {
    console.log(currency);
    this.currency = currency;
    this.isOpen = false;
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

.dropdown-custom {
  top: 3rem;
  transition: 1s;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
