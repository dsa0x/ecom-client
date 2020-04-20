<template>
  <div class=" flex flex-col text-gray-600  text-left relative">
    <div class="text-3xl">Register on Ecom</div>
    <div class="text-xl">Join Ecom now and enjoy free coupons</div>
    <form
      class="w-full transition transition-all duration-150"
      action=""
      autocomplete="off"
    >
      <div v-if="page == 1">
        <div class="flex flex-col items-start my-10">
          <label class="input-label" for="firstName">First Name</label>
          <input
            class="input"
            type="text"
            name="firstName"
            v-model="user.firstName"
          />
        </div>
        <div class="flex flex-col items-start my-10">
          <label class="input-label" for="lastName">Last Name</label>
          <input
            class="input"
            type="text"
            name="lastName"
            v-model="user.lastName"
          />
        </div>
        <div class="flex flex-col items-start my-10">
          <label class="input-label" for="email">Email</label>
          <input class="input" type="text" name="email" v-model="user.email" />
        </div>
        <div>
          <btn label="Continue" :onClick="next"></btn>
        </div>
      </div>
      <div v-if="page == 2">
        <span
          @click="prev"
          class="mdi mdi-backburger absolute text-5xl top-0 right-0 cursor-pointer hover:text-blue-750"
        ></span>
        <div class="flex flex-col items-start my-10">
          <label class="input-label" for="username">Username</label>
          <input
            class="input"
            type="text"
            name="username"
            v-model="user.username"
          />
        </div>
        <div class="flex flex-col items-start my-10">
          <label class="input-label" for="password">Password</label>
          <input
            class="input"
            type="password"
            name="password"
            v-model="user.password"
          />
        </div>
        <div class="flex flex-col items-start my-10">
          <label class="input-label" for="cpassword">Confirm Password</label>
          <input
            class="input"
            type="password"
            name="confirmPassword"
            v-model="user.confirmPassword"
          />
        </div>
        <div>
          <btn :onClick="submit" label="Submit" class="mb-5"></btn>
        </div>
      </div>
    </form>
    <div class="text-2xl text-center pt-6">
      Already have an account?
      <span class="text-blue-650 hover:text-blue-700"
        ><a href="">Sign in</a></span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import axios from "axios";

@Component({
  components: {
    btn: Button,
  },
})
export default class RegisterForm extends Vue {
  page: number = 1;

  user: object = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };

  async submit() {
    console.log("started");
    try {
      //   console.log(this.user);
      const user = await axios.post(
        `http://localhost:5000/register`,
        this.user
      );
      //   console.log(user);
    } catch (error) {
      console.log(error.response);
    }
  }

  prev() {
    this.page--;
  }
  next() {
    this.page++;
    console.log(this.page);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  @apply w-full px-5 bg-white rounded-sm bg-gray-200 text-gray-700 
  rounded-r-lg overflow-hidden py-4 text-3xl leading-tight border-none appearance-none;
  border-bottom: solid 2px transparent;
  &:focus {
    border-bottom: solid 2px blue;
    @apply outline-none bg-white border-blue-650;
  }

  &-label {
    @apply text-gray-500 text-2xl tracking-wide;
  }
}
</style>
