<template>
  <div class="">
    <div class="" v-for="img in [currentIndex]" :key="img" alt="">
      <transition name="fade">
        <img :src="currentImg" class="object-cover w-full" alt="" />
      </transition>
    </div>

    <div class="slider-select p-3 m-2 z-40 absolute right-0 flex flex-col">
      <div
        @click="setImg(index)"
        v-for="(img, index) in imageList"
        :key="img"
        class="check bg-transparent m-1"
      >
        <div v-if="currentIndex == index" class="inside"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainSlider extends Vue {
  @Prop() private msg!: string;

  image!: string;
  timer: any = null;
  imageList: Array<string> = [
    "https://cdn.pixabay.com/photo/2016/11/23/17/08/bag-1853847_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/08/00/18/guy-2609537_1280.jpg",
    `https://images.unsplash.com/photo-1509713205161-cf0cfc77174a?ixlib=rb-1.2.1&i
    xid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=
    rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80`,
  ];

  currentIndex: number = 0;
  mounted() {
    this.timer = setInterval(this.next, 5000);
  }

  setImg(index: number) {
    this.currentIndex = index;
  }

  next() {
    this.currentIndex += 1;
  }
  prev() {
    this.currentIndex -= 1;
  }

  get currentImg() {
    // if (this.image) return this.image;
    // return this.imageList[Math.abs(this.currentIndex) % this.imageList.length];
    if (this.image) return this.image;
    return this.imageList[Math.abs(this.currentIndex) % this.imageList.length];
  }

  set currentImg(img) {
    this.image = img;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-white: rgba(165, 165, 165, 1);
$bg-main: rgb(44, 44, 57);
$font-default: 1.5rem;

img {
  height: 70vh;
}

.test {
  position: absolute;
  bottom: 0;
  right: 5rem;
}

.check {
  display: block;
  // position: absolute;
  border: 1px solid #fff;
  height: 12px;
  width: 12px;

  &:hover {
    border: 1px solid #fff;
  }
}

.inside {
  display: block;
  content: "";
  height: 6px;
  width: 6px;
  background-color: #fff;
  margin: auto;
  margin-top: 2px;
}

.slider-select {
  top: 50rem;
  right: 2rem;
}

.fade-leave-active,
.fade-enter-active {
  visibility: visible;
  transition: all 2s;
  // position: absolute;
  width: 100%;
  opacity: 0.5;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  width: 100%;
  opacity: 0;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 1.3rem;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 10rem;
  background-color: red;
}

// img {
//   height: 100%;
//   width: 100%;
// }

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
