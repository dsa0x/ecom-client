<template>
  <div class="flex flex-col relative overflow-hidden">
    <nav
      class="nav flex text-2xl md:justify-center sm:justify-between bg-gray-100 h-24 items-center justify-between "
    >
      <ul class="flex justify-around md:mr-auto sm:mr-0 sm:flex-1">
        <li class="">
          <a class="hover:text-gray-600 px-3" @click="home" href="#">
            <span class="pr-1 mdi mdi-home "></span>Home
          </a>
        </li>
        <li class="">
          <a class="hover:text-gray-600 px-3" href="#"
            ><span class="pr-1 mdi mdi-account"></span>About Us</a
          >
        </li>
        <li class="">
          <a class="hover:text-gray-600 px-3" href="#"
            ><span class="pr-1 mdi mdi-message"></span>Contact Us</a
          >
        </li>
      </ul>
      <div class="lg:hidden">
        Free shipping on all orders above {{ currency.symbol }}100
      </div>
      <div class="w-1/4 flex h-full justify-around">
        <!-- <span  v-show="isLoggedIn">Welcome {{ lastName }}</span> -->
        <span
          class=" h-full flex relative pointer"
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
                  class=" block p-3 w-64 pointer bg-custom-100 hover:bg-custom-300 text-blue-200"
                  v-for="(currenc, id) in currencyList"
                  :key="id"
                  @click="setCurrency(currenc)"
                >
                  <a class=""> {{ currenc.symbol }} {{ currenc.name }} </a>
                </li>
              </ul>
            </div>
          </transition></span
        >
      </div>
    </nav>

    <div
      class="p-8 bg-gray-1050 flex items-center w-full md:flex-wrap md:p-0 md:pb-8 md:justify-between sm:mt-4"
    >
      <div
        @click="home"
        class="text-4xl text-gray-200 uppercase md:w-full md:bg-custom-100 
        md:py-4 md:mb-4 sm:w-auto sm:bg-transparent sm:pl-6 sm:pt-8 cursor-pointer"
      >
        Ecom
      </div>
      <div
        class="w-1/2 ml-16 flex relative items-stretch sm:w-full sm:flex-auto sm:mx-8 sm:order-last sm:mt-12 flex-1"
      >
        <span
          class="flex bg-custom-300 text-white text-xl active:bg-custom-400 text-center py-6 px-3 cursor-pointer rounded-l-lg"
          >All &#9662;</span
        >
        <input
          type="text"
          name=""
          class="bg-gray-200 text-gray-700 border border-gray-200 rounded-r-lg overflow-hidden py-3 text-3xl
          px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
          placeholder="Search Products..."
          autocomplete="false"
          id="search"
        />
        <span
          class="absolute text-3xl mdi mdi-shield-search h-full right-0
          bg-custom-300 text-white active:bg-custom-400 px-3 text-center pt-4 cursor-pointer rounded-r-lg"
        ></span>
      </div>
      <div class="flex text-2xl justify-around flex-grow ml-16 flex-1">
        <div v-if="!isLoggedIn" @click="login" class="icons-text">
          <span class=" text-4xl mdi mdi-account-circle"></span>Login
        </div>
        <div v-if="!isLoggedIn" @click="register" class="icons-text">
          <span class="text-4xl mdi mdi-account-multiple-plus"></span>Register
        </div>
        <div class="icons-text">
          <span class="text-4xl mdi mdi-heart-outline"></span>Wishlist
        </div>
        <div class="icons-text">
          <span class="text-4xl mdi mdi-cart"></span>Cart
        </div>
        <div
          v-if="isLoggedIn"
          @click="$router.push({ name: 'CreateProduct' })"
          class="icons-text"
        >
          <span class="text-4xl mdi mdi-cart"></span>Admin
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  @Prop() private msg!: string;

  currencyList: Object = {
    euro: { name: "Euro", symbol: "€", desc: "eur" },
    usd: { name: "US Dollars", symbol: "$", desc: "usd" },
    pound: { name: "Pounds", symbol: "£", desc: "gbp" },
  };
  // currency: object = { name: "Euro", symbol: "€", desc: "eur" };
  isOpen: Boolean = false;

  get currency() {
    return this.$store.state.currency;
  }

  // set currency(currency) {
  //   this.currency = currency;
  // }

  get isLoggedIn() {
    return this.$store.state.user.isLoggedIn;
  }

  get lastName() {
    return this.$store.state.user.lastName;
  }

  setCurrency(currency: { name: string; symbol: string; desc: string }) {
    // this.currency = currency;
    this.isOpen = false;
    this.$store.commit("SET_CURRENCY", currency);
  }

  // @Watch("currency")

  toggle() {
    this.isOpen = !this.isOpen;
  }

  register() {
    this.$router.push({ name: "Register" }).catch((err) => {});
  }

  login() {
    this.$router.push({ name: "Login" }).catch((err) => {});
  }
  home() {
    this.$router.push({ name: "Home" }).catch((err) => {});
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
  font-size: 1.5rem;

  & ul:first-of-type {
    // flex-basis: 100vw;
  }
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
.icons-text {
  @apply flex flex-col text-gray-500   cursor-pointer;

  &:hover {
    @apply text-gray-100;
  }

  &:active {
    @apply text-gray-300;
  }
}
</style>
