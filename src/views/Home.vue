<template>
  <div class="relative transition transition-all duration-200">
    <div class="main grid grid-cols-10 gap-6 lg:gap-0">
      <TopCategory class="col-span-2 md:hidden" />
      <MainSlider
        class="col-start-3 col-end-11 row-start-1 row-end-3 md:col-start-1"
      />
      <BestSellerSide
        class="col-span-2 md:col-start-1 md:col-end-11 sm:hidden"
      />
      <div
        class="info__main grid grid-cols-3 sm:grid-cols-1 gap-12 items-center p-8"
      >
        <InfoCard
          class="py-5"
          title="Free Shipping"
          subtitle="On All Orders"
          icon="mdi-motorbike"
        />

        <InfoCard
          class="py-5"
          title="24/7 Support"
          subtitle="Get help ASAP"
          icon="mdi-headset"
        />
        <InfoCard
          class="py-5"
          title="100% Return"
          subtitle="Within 30 Days"
          icon="mdi-keyboard-return"
        />
      </div>
      <CategoryCard class="col-start-1 col-end-11 row-start-4 row-end-6" />
      <PopularProducts
        class="col-start-1 col-end-11 mt-5 row-start-6 row-end-7"
      />
      <NewProducts class="col-start-1 col-end-11 mt-5 row-start-7 row-end-8" />
      <Gallery class="mt-16 col-start-1 col-end-11 row-start-8 row-end-9" />
    </div>
    <div
      @click.self="home"
      v-if="modalOpen"
      class="flex justify-center absolute view"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainSlider from "@/components/MainSlider";
import TopCategory from "@/components/TopCategory";
import BestSellerSide from "@/components/BestSellerSide";
import InfoCard from "@/components/InfoCard";
import CategoryCard from "@/components/CategoryCard";
import PopularProducts from "@/components/PopularProducts";
import NewProducts from "@/components/NewProducts";
import Gallery from "@/components/Gallery";

export default {
  name: "Home",
  components: {
    MainSlider,
    TopCategory,
    BestSellerSide,
    InfoCard,
    CategoryCard,
    PopularProducts,
    NewProducts,
    Gallery,
  },
  computed: {
    modalOpen() {
      return this.$route.path !== "/";
    },
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    console.log(process.env.VUE_APP_SERVER_URL, "surl");
  },
};
</script>

<style lang="scss" scoped>
.info__main {
  grid-column: 1/-1;
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // column-gap: 3rem;
  // align-items: center;
  // padding: 2rem;
}

.main {
  display: grid;
  grid-template-rows: repeat(3, minmax(0, min-content)) 35vh 35vh repeat(
      4,
      minmax(0, min-content)
    );
  @media screen and (max-width: 767px) {
    grid-template-rows: repeat(3, minmax(0, min-content)) 25vh 25vh repeat(
        4,
        minmax(0, min-content)
      );
  }
  // @media screen and (max-width: 639px) {
  //   grid-template-rows: repeat(3, minmax(0, 25rem)) 25vh 25vh repeat(
  //       4,
  //       minmax(0, min-content)
  //     );
  // }
}

.view {
  transition: all 0.4s;
  // width: 80vw;
  overflow: hidden;
  height: 70vh;
  @apply absolute;
  background: rgba(0, 0, 0, 0.5);
  padding-top: 2rem;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
}
</style>
