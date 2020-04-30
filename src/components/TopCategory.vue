<template>
  <div class="flex lg:mx-2 mx-1 flex-col">
    <div
      class="text-3xl text-gray-500 font-medium custom-border text-left  my-8 uppercase"
    >
      Top Categories
    </div>
    <div class="grid grid-cols-3 gap-2 mt-3">
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 text-gray-500 cursor-pointer hover:bg-gray-800 
        hover:text-blue-200 click-down"
      >
        <span class="mdi mdi-laptop text-5xl"></span>Computers
      </div>
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 hover:bg-gray-800 hover:text-blue-200 text-gray-500 cursor-pointer click-down"
      >
        <span class="mdi mdi-bag-checked text-5xl"></span>Bags
      </div>
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 hover:bg-gray-800 hover:text-blue-200 text-gray-500 cursor-pointer click-down"
      >
        <span class="mdi mdi-cellphone text-5xl"></span>Phones
      </div>
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 hover:bg-gray-800 hover:text-blue-200 text-gray-500 cursor-pointer click-down"
      >
        <span class="mdi mdi-microphone-outline text-5xl"></span>Speakers
      </div>
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 hover:bg-gray-800 hover:text-blue-200 text-gray-500 cursor-pointer click-down"
      >
        <span class="mdi mdi-muffin text-5xl"></span>Ice Cream
      </div>
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 hover:bg-gray-800 hover:text-blue-200 text-gray-500 cursor-pointer click-down"
      >
        <span class="mdi mdi-fruit-grapes text-5xl"></span>Fruits
      </div>
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 hover:bg-gray-800 hover:text-blue-200 text-gray-500 cursor-pointer click-down"
      >
        <span class="mdi mdi-cloud-sync-outline text-5xl"></span>Cloud
      </div>
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 hover:bg-gray-800 hover:text-blue-200 text-gray-500 cursor-pointer click-down"
      >
        <span class="mdi mdi-gamepad-variant text-5xl"></span>Games
      </div>
      <div
        class="flex flex-col text-xl lg:text-base bg-blue-750 hover:bg-gray-800 hover:text-blue-200 text-gray-500 cursor-pointer click-down"
      >
        <span class="mdi mdi-google-translate text-5xl"></span>Translator
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class TopCategory extends Vue {
  @Prop() private msg!: string;

  currencyList: Object = {
    euro: { name: "Euro", symbol: "€" },
    usd: { name: "US Dollars", symbol: "$" },
    pound: { name: "Pounds", symbol: "£" },
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* .custom-border {
  border-bottom: solid 2px #228efb;
} */

.custom-border:after {
  content: "";
  display: block;
  margin: 0;
  width: 30%;
  padding-top: 0.3rem;
  border-bottom: 2px solid #228efb; /* This creates the border. Replace black with whatever color you want. */
}

$color-white: rgba(165, 165, 165, 1);
$bg-main: rgb(44, 44, 57);
$font-default: 1.5rem;
$blue-light: #228efb;
.grid-cat-item {
  @apply flex flex-col text-xl bg-blue-750 text-gray-500 cursor-pointer;
}

.grid-cat-item:hover {
  @apply bg-gray-800 text-blue-200;
}

.click-down:hover {
  @apply transform -translate-y-1 transition-all duration-200;
}
</style>
