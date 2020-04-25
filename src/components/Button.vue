<template>
  <button
    @click.prevent="onClick"
    class="w-full  text-2xl font-bold rounded-lg py-4 cursor-pointer uppercase"
    :class="color"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import RegisterForm from "@/components/RegisterForm.vue";

@Component({
  components: { RegisterForm },
})
export default class Button extends Vue {
  @Prop() private label!: string;
  @Prop({ required: true }) private onClick!: () => void;
  @Prop({ default: "dark" }) private color!: string;

  sendEvent() {
    this.$emit("clicked");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dark {
  @apply bg-blue-1050  text-blue-200;

  &:hover {
    @apply bg-blue-900;
  }
}
.light {
  @apply bg-custom-200  text-blue-1050;

  &:hover {
    @apply bg-custom-300;
  }
}
</style>
