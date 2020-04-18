<template>
  <div
    class="text-gray-500 h-40 bg-blue-750 items-center flex bg-red-500 text-4xl justify-evenly click-down"
  >
    <span
      :class="icon"
      class="mdi
     custom-border text-6xl"
    ></span>
    <div class="flex flex-col text pl-7">
      <span class="uppercase">{{ title }}</span>
      <span class="text-2xl">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class BestSellerSide extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() icon!: string;
  test: Object = [
    {
      image: `https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg`,
      title: "Dell i7559",
      price: "$700.00",
    },
    {
      image: `https://cdn.pixabay.com/photo/2016/11/30/18/14/idea-1873540_1280.png`,
      title: "Samsung S10+",
      price: "$1000.00",
    },
    {
      image: `https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png`,
      title: "Dell i7559",
      price: "$700.00",
    },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text:before {
  content: "";
  display: block;
  border-left: solid 4px green;
}

.custom-border:after {
  content: "";
  margin-left: 20px;
  width: 60%;
  border-left: 1px solid #228efb;
}

.click-down:hover {
  @apply shadow-xltest transform -translate-y-1 transition-all duration-500;
}
</style>
