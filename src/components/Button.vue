<template>
  <button
    @click.prevent="onClick"
    class="w-full bg-blue-1050 hover:bg-blue-900 text-blue-200 text-2xl font-bold rounded-lg py-4 cursor-pointer uppercase"
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

  sendEvent() {
    this.$emit("clicked");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
