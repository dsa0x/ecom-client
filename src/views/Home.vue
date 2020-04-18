<template>
  <div class="main grid grid-cols-10 gap-3 px-5">
    <TopCategory class="col-span-2" />
    <MainSlider class="col-start-3 col-end-11 row-start-1 row-end-3" />
    <BestSellerSide class="col-span-2" />
    <div class="info__main">
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
    <ProductList class="col-start-1 col-end-11" />
  </div>
  <!-- <div class="home flex flex-col">
    <div class="flex w-full">
      <div class="flex-grow flex flex-col">
        <TopCategory class="" />
        <BestSellerSide />
      </div>
      <MainSlider class="w-3/4 ml-auto" />
    </div>
    <div class="flex justify-around mt-8">
      <InfoCard
        class="h-30 w-1/4 py-5"
        title="Free Shipping"
        subtitle="On All Orders"
        icon="mdi-motorbike"
      />
      <InfoCard
        class="h-30 w-1/4 py-5"
        title="24/7 Support"
        subtitle="Get help ASAP"
        icon="mdi-headset"
      />
      <InfoCard
        class="h-30 w-1/4 py-5"
        title="100% Return"
        subtitle="Within 30 Days"
        icon="mdi-keyboard-return"
      />
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src
import MainSlider from "@/components/MainSlider";
import TopCategory from "@/components/TopCategory";
import BestSellerSide from "@/components/BestSellerSide";
import InfoCard from "@/components/InfoCard";
import CategoryCard from "@/components/CategoryCard";
import ProductList from "@/components/ProductList";

export default {
  name: "Home",
  components: {
    MainSlider,
    TopCategory,
    BestSellerSide,
    InfoCard,
    CategoryCard,
    ProductList,
  },
};
</script>

<style lang="scss" scoped>
.info__main {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
  align-items: center;
  padding: 2rem;
}

.main {
  display: grid;
  grid-template-rows: repeat(3, minmax(0, min-content)) 25vw repeat(
      6,
      minmax(0, min-content)
    );
}
// grid-template-columns:
//   [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
//   [center-start]
//   repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
//   [center-end] minmax(6rem, 1fr) [full-end];
</style>
