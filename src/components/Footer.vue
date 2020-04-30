<template>
  <div class="main-grid gap-6 text-blue-200 bg-custom-100 mt-16 pt-16">
    <div class="flex flex-col col-start-1 col-end-4 sm:col-end-7 pl-6 ml-12">
      <h3
        class="text-3xl uppercase font-bold text-left heading-3 custom-border"
      >
        Subscribe to our newsletter
      </h3>
      <p class="text-3xl text-left">
        Stay connected with us to get notifications about discounts and coupons
      </p>
      <div class="flex w-wide mt-6 mr-6">
        <input
          type="text"
          placeholder="Your Email"
          class="sub w-full bg-gray-200 text-gray-700 text-2xl py-4 
          px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <span
          class=" text-4xl mdi mdi-shield-search h-full
          bg-blue-650 text-white active:bg-blue-600 px-3 pt-2 cursor-pointer"
        ></span>
      </div>
    </div>
    <div
      class="flex flex-col col-start-4 col-end-5 sm:col-start-1 sm:col-end-3 sm:pl-5"
    >
      <h3
        class="text-3xl uppercase font-bold text-left heading-3 custom-border"
      >
        Information
      </h3>

      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Career</li>
        <li>Terms</li>
      </ul>
    </div>
    <div
      class="flex flex-col col-start-5 col-end-6 sm:col-start-3 sm:col-end-5"
    >
      <h3
        class="text-3xl uppercase font-bold text-left heading-3 custom-border"
      >
        My Account
      </h3>

      <ul>
        <li>My Account</li>
        <li>Cart</li>
        <li>Wish List</li>
        <li>Orders</li>
      </ul>
    </div>
    <div
      class="flex flex-col col-start-6 col-end-7 sm:col-start-5 sm:col-end-7"
    >
      <h3
        class="text-3xl uppercase font-bold text-left heading-3 custom-border"
      >
        Support
      </h3>

      <ul>
        <li>Get Help</li>
        <li>Returns</li>
        <li>Privacy Policy</li>
        <li>Delivery</li>
      </ul>
    </div>
    <div class="footend hov flex sm:mt-4">
      <div class="icons text-4xl ml-12">
        <span class="px-2 mdi mdi-facebook "></span>
        <span class="px-2 mdi mdi-twitter "></span>
        <span class="px-2 mdi mdi-instagram "></span>
        <span class="px-2 mdi mdi-snapchat "></span>
        <span class="px-2 mdi mdi-email "></span>
      </div>
      <div class="text-4xl self-center m-auto  transform -translate-x-16">
        &copy; Copyright 2020
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Gallery extends Vue {
  @Prop() title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-grid {
  display: grid;
  //   height: 500px;
  // padding-right: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 1fr));
  grid-template-rows: 3fr 1fr;
  row-gap: 8rem;

  @media screen and (max-width: 639px) {
    grid-template-rows: 1fr 1fr min-content;
    row-gap: 1rem;
  }
}

.heading-3 {
  margin-bottom: 2rem;
}

.w-wide {
  max-width: 35rem;
}

.sub {
  overflow: hidden;
  border: solid 1px;
  border-right: none;
  // border-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  & + span {
    // border: solid 1px;
    border-left: none;
    // border-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
}

ul {
  list-style: none;
}

.custom-border:after {
  content: "";
  display: block;
  margin: 0;
  width: 30%;
  padding-top: 0.3rem;
  border-bottom: 2px solid #228efb; /* This creates the border. Replace black with whatever color you want. */
}

.footend {
  grid-column: 1/7;
  width: 100%;
  border-top: solid 1px grey;
  align-items: center;
  // justify-content: space-evenly;
}

li,
.hov {
  @apply text-3xl text-left py-3;
  cursor: pointer;
}

li:hover,
.hov:hover {
  @apply text-blue-650;
}
</style>
