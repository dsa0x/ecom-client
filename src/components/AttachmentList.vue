<template>
  <div class="grid grid-flow-row grid-cols-4 gap-4 w-full text-blue-1050">
    <span
      class="text-8xl text-blue-1050 flex items-center justify-center mdi mdi-image-plus w-64 h-64 bg-gray-200"
    ></span>
    <div
      v-for="image in images"
      :key="image.id"
      class="relative w-64 h-64 bg-gray-200"
    >
      <img :src="image.thumbnail" class="w-full h-full bg-gray-200" alt="" />
      <span
        v-show="image.progress != 100"
        class="absolute percent text-blue-1050 text-3xl w-24 h-12 bg-gray-100"
        >{{ image.progress }}%</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import axios from "axios";

@Component
export default class AttachmentList extends Vue {
  @Prop() private images!: Array<{}>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.percent {
  top: 50%;
  left: 30%;
  z-index: 100;
  border: solid 1px grey;
}

.main {
  display: grid;
  grid-template-rows: repeat(6, minmax(0, min-content));
}

.cat-item {
  @apply border border-gray-200 w-full py-2 mx-6 my-3 rounded-full;
}
</style>
