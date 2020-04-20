<template>
  <div class=" flex flex-col text-gray-600  text-left relative">
    <div class="text-3xl">Welcome back</div>
    <div class="text-xl">Please login</div>
    <form
      class="w-full transition transition-all duration-150"
      action=""
      autocomplete="off"
      @submit.prevent=""
    >
      <div class="flex flex-col items-start my-10">
        <label class="input-label" for="email">Email</label>
        <input class="input" type="text" name="email" v-model="user.email" />
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
      <div>
        <btn label="Login" :onClick="submit"></btn>
      </div>
    </form>
    <div class="text-2xl text-center pt-6">
      New here?
      <span class="text-blue-650 hover:text-blue-700"
        ><a href="">Create an account</a></span
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
export default class LoginForm extends Vue {
  user: object = {
    email: "dsmediens@gmail.com",
    password: "123456",
  };

  async submit() {
    console.log("started");
    try {
      //   console.log(this.user);
      const user = await axios.post(`http://localhost:5000/login`, this.user);
      console.log(user.data);
    } catch (error) {
      console.log(error.response);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  @apply w-full px-5 bg-white rounded-sm bg-gray-200 text-blue-750 
  rounded-r-lg overflow-hidden py-4 text-3xl leading-tight border-none appearance-none;
  border-bottom: solid 2px transparent;
  &:focus {
    border-bottom: solid 2px blue;
    @apply outline-none bg-white border-blue-650;
  }

  &-label {
    @apply text-gray-600 text-2xl tracking-wide;
  }
}
</style>
