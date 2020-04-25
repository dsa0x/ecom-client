<template>
  <transition name="scale-up">
    <!-- <div class="flex justify-center absolute view"> -->
    <div class="grid grid-cols-2  bg-gray-100 rounded-lg overflow-hidden w-4/5">
      <transition-group class="form-wrap" tag="div" name="fade">
        <router-view class="" :key="1"></router-view>
      </transition-group>
      <div class="overflow-hidden col-start-2 col-end-3">
        <img
          :src="imageList[0]"
          class="w-full object-cover bg-center h-full"
          alt="Image"
        />
      </div>
    </div>
    <!-- </div> -->
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Auth extends Vue {
  get restCategories() {
    return 1;
  }

  imageList: Array<string> = [
    `https://images.unsplash.com/photo-1548100721-15f0e76035c8?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-wrap {
  width: 35rem;
  align-self: center;
  //   padding-top: 5rem;
  justify-self: center;
}

.view {
  transition: all 0.4s;
  // width: 80vw;
  height: 70vh;
  @apply absolute;
  background: rgba(0, 0, 0, 0.5);
  padding-top: 2rem;
  //   overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
}

// .scale-up-enter,
// .scale-up-enter-active {
//   animation: bounce-in 1s;
// }
// .scale-up-leave-active {
//   animation: bounce-in 1s reverse;
// }
.scale-up-enter-active,
.scale-up-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.scale-up-leave,
.scale-up-enter-to {
  transform: translateX(-90px);
}

.scale-up-enter,
.scale-up-leave-to {
  color: red;
  transform: translateX(90px);
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    // transform: translateY(40px);
    opacity: 0;
  }
  //   50% {
  //     transform: translateY(100rem);
  //   }
  100% {
    // transform: translateY(0);
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    // transform: translateY();
    opacity: 1;
  }
  //   50% {
  //     transform: translateY(-10rem);
  //   }
  100% {
    // transform: translateY(-20rem);
    opacity: 0;
  }
}

.fade-leave-active {
  animation: bounce-in 0.3s;
}
.fade-enter-active {
  animation: bounce-out 0.3s;
}
// .fade-enter-active,
// .fade-leave-active {
//   transition: all 0.5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
