<template>
  <div class="flex flex-wrap text-blue-1050">
    <img
      :src="image.thumbnail"
      class="w-64 h-64 m-4 bg-gray-200"
      v-for="image in images"
      :key="image.id"
      alt=""
    />
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
.main {
  display: grid;
  grid-template-rows: repeat(6, minmax(0, min-content));
}

.cat-item {
  @apply border border-gray-200 w-full py-2 mx-6 my-3 rounded-full;
}
</style>
