<template>
  <div class="flex px-4 flex-col">
    <div
      class="text-3xl text-gray-500 font-medium custom-border text-left  my-8 uppercase"
    >
      BestSellers
    </div>
    <div
      class="flex flex-col mx-4 md:flex-row md:justify-between sm:flex-wrap sm:justify-center sm:pl-16"
    >
      <div
        class="flex md:flex-col my-4 cursor-pointer hover:opacity-75 basis items-start md:items-start"
        v-for="(item, index) in products"
        :key="index"
      >
        <img
          class=" h-20 w-20 mr-4 md:h-56 md:w-56 scale-down"
          :src="item.images[0]"
          :alt="item.title"
        />
        <div
          class="text-left text-2xl md:text-3xl font-medium hover:text-blue-100 text-gray-500  flex flex-col"
        >
          <span class=" md:text-custom-300 ">{{ item.title }}</span>
          <span>{{ currencify(item.price) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: mapState({
    products: (state: any) => state.products.slice(0, 3),
  }),
})
export default class BestSellerSide extends Vue {
  get currency() {
    return this.$store.state.currency;
  }

  currencify(value) {
    if (!value) return "";
    let currency = this.currency.desc;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(value);
  }

  test: Object = [
    {
      image: `https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg`,
      title: "Dell i7559",
      price: "$700.00",
    },
    {
      image: `https://cdn.pixabay.com/photo/2016/11/30/18/14/idea-1873540_1280.png`,
      title: "Dell i7559",
      price: "$700.00",
    },
    {
      image: `https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png`,
      title: "Dell i7559",
      price: "$700.00",
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
@media screen and (max-width: 767px) {
  .scale-down {
    object-position: center;
    transform: scale(1);
    transform-origin: 0 0;
    transition: all 0.8s ease-in-out;

    &:hover {
      filter: brightness(90%);
      transform: scale(0.8);
    }
  }
}
@media screen and (max-width: 639px) {
  .basis {
    flex: 0 0 50%;
  }
}
@media screen and (min-width: 768px) {
  .custom-border:after {
    content: "";
    display: block;
    margin: 0;
    width: 30%;
    padding-top: 0.3rem;
    border-bottom: 2px solid #228efb; /* This creates the border. Replace black with whatever color you want. */
  }
}
</style>
