<template>
  <div class="flex px-4 flex-col">
    <div
      class="text-3xl text-gray-500 font-medium custom-border text-left  my-8 uppercase"
    >
      BestSellers
    </div>
    <div class="flex flex-col mx-4">
      <div
        class="flex my-4 cursor-pointer hover:opacity-75 items-end"
        v-for="(item, index) in test"
        :key="index"
      >
        <img class=" h-20 w-20 mr-4" :src="item.image" :alt="item.title" />
        <div
          class="text-left text-2xl font-medium hover:text-blue-100 text-gray-500  flex flex-col"
        >
          <span class="text-blue-650 hover:text-blue-600">{{
            item.title
          }}</span>
          <span>{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class BestSellerSide extends Vue {
  test: Object = [
    {
      image: `https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg`,
      title: "Dell i7559",
      price: "$700.00"
    },
    {
      image: `https://cdn.pixabay.com/photo/2016/11/30/18/14/idea-1873540_1280.png`,
      title: "Dell i7559",
      price: "$700.00"
    },
    {
      image: `https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png`,
      title: "Dell i7559",
      price: "$700.00"
    }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-border:after {
  content: "";
  display: block;
  margin: 0;
  width: 30%;
  padding-top: 0.3rem;
  border-bottom: 2px solid #228efb; /* This creates the border. Replace black with whatever color you want. */
}
</style>
