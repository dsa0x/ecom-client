<template>
  <div class="main-grid gap-4">
    <div
      :key="index"
      v-for="(item, index) in products"
      class=" cursor-pointer overflow-hidden"
      :class="`img--${index + 1}`"
    >
      <img
        :src="item.image"
        alt=""
        class=" w-full h-full bg-center object-cover c-img"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Gallery extends Vue {
  @Prop() title!: string;
  @Prop() icon!: string;
  products: Array<object> = [
    {
      image: `https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=
        eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      title: "Men's Collection",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1508350552147-213c11fcede6?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=800`,
      title: "Women's Shoelaces",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1540924782561-3fc182603b86?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60`,
      title: "Salvatore Begore Sneakers",
      price: "$1000.00",
    },
    {
      image: `https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=
      rb-1.2.1&auto=format&fit=crop&w=900&q=60`,
      title: "MacBook Pro 2020 i9",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80`,
      title: "Striped TShirt",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1585159812874-5b84415c0091?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=811&q=80`,
      title: "Striped Jeans",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80`,
      title: "Striped TShirt",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1585159812874-5b84415c0091?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=811&q=80`,
      title: "Striped Jeans",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80`,
      title: "Striped TShirt",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1585159812874-5b84415c0091?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=811&q=80`,
      title: "Striped Jeans",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1586898936421-67ffc8e3a5b5?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80`,
      title: "Striped Sac",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1586898936421-67ffc8e3a5b5?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80`,
      title: "Striped Sac",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1586898936421-67ffc8e3a5b5?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80`,
      title: "Striped Sac",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1586898936421-67ffc8e3a5b5?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80`,
      title: "Striped Sac",
      price: "$700.00",
    },
  ];
  generateGrid() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-grid {
  display: grid;
  height: 500px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 1fr);
}

.c-img {
  transform: scale(1.4);
  transition: all 0.5s;

  &:hover {
    filter: brightness(90%);
    transform: scale(1);
  }
}

.img {
  &--1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
  }
  &--2 {
    grid-column: 3 / span 3;
    grid-row: 1 / span 3;
  }
  &--3 {
    grid-column: 6 / span 1;
    grid-row: 1 / span 2;
  }
  &--4 {
    grid-column: 7 / span 2;
    grid-row: 1 / span 2;
  }
  &--5 {
    grid-column: 1 / span 2;
    grid-row: 3 / span 3;
  }
  &--6 {
    grid-column: 3 / span 2;
    grid-row: 4 / span 2;
  }
  &--7 {
    grid-column: 5 / span 1;
    grid-row: 4 / span 1;
  }
  &--8 {
    grid-column: 6 / span 2;
    grid-row: 3 / span 2;
  }
  &--9 {
    grid-column: 8 / span 1;
    grid-row: 3 / span 3;
  }
  &--10 {
    grid-column: 1 / span 1;
    grid-row: 6 / span 2;
  }
  &--11 {
    grid-column: 2 / span 2;
    grid-row: 6 / span 2;
  }
  &--12 {
    grid-column: 4 / span 1;
    grid-row: 6 / span 2;
  }
  &--13 {
    grid-column: 5 / span 3;
    grid-row: 5 / span 3;
  }
  &--14 {
    grid-column: 8 / span 1;
    grid-row: 6 / span 2;
  }
}
</style>
