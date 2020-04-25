<template>
  <div class="main-grid gap-4 px-8">
    <div
      :key="index"
      v-for="(item, index) in products"
      class=" cursor-pointer overflow-hidden"
      :class="`img--${index + 1}`"
    >
      <img
        :src="item.image"
        alt=""
        class=" w-full h-full bg-center object-cover scale-down"
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
      image: `https://images.unsplash.com/photo-1515197304934-f95872d7156f?ixlib=
      rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
      title: "Men's Collection",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1524149340407-6effabbb3a5c?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80`,
      title: "Women's Shoelaces",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1575560326142-fc881fc10ed5?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80`,
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
      image: `https://images.unsplash.com/photo-1520170350707-b2da59970118?ixlib=
      rb-1.2.1&auto=format&fit=crop&w=1001&q=80`,
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
      image: `https://images.unsplash.com/photo-1552503711-1fac14efc47f?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      title: "Striped Sac",
      price: "$700.00",
    },
    {
      image: `https://images.unsplash.com/photo-1551907234-fb773fb08a2a?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=994&q=80`,
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
  height: 700px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 1fr);
}

.scale-down {
  object-position: center;
  transform: scale(1.2);
  transition: all 0.8s ease-in-out;

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
  // &--3 {
  //   grid-column: 6 / span 1;
  //   grid-row: 1 / span 2;
  // }
  &--3 {
    grid-column: 6 / span 3;
    grid-row: 1 / span 2;
  }
  &--4 {
    grid-column: 1 / span 2;
    grid-row: 3 / span 3;
  }
  &--5 {
    grid-column: 3 / span 2;
    grid-row: 4 / span 2;
  }
  &--6 {
    grid-column: 5 / span 1;
    grid-row: 4 / span 1;
  }
  &--7 {
    grid-column: 6 / span 2;
    grid-row: 3 / span 2;
  }
  &--8 {
    grid-column: 8 / span 1;
    grid-row: 3 / span 3;
  }
  &--9 {
    grid-column: 1 / span 1;
    grid-row: 6 / span 2;
  }
  &--10 {
    grid-column: 2 / span 2;
    grid-row: 6 / span 2;
  }
  &--11 {
    grid-column: 4 / span 1;
    grid-row: 6 / span 2;
  }
  &--12 {
    grid-column: 5 / span 3;
    grid-row: 5 / span 3;
  }
  &--13 {
    grid-column: 8 / span 1;
    grid-row: 6 / span 2;
  }
}
</style>
