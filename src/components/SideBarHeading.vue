<template>
  <div
    class="text-3xl text-gray-500 font-medium custom-border text-left  my-8 uppercase"
  >
    {{ label }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class SideBarHeading extends Vue {
  @Prop() private label!: string;
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
