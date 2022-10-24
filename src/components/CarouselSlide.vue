<template>
  <div id="wrapper">
    <v-carousel :show-arrows="false" hide-delimiter-background>
      <v-carousel-item v-for="(image, index) in images" :key="index">
        <img class="image" :src="image" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  naem: "CarouselSlide",
  props: {
    images: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
#wrapper::v-deep .v-carousel {
  height: unset !important;
}
#wrapper::v-deep .v-carousel__item {
  height: unset !important;
}

#wrapper::v-deep .v-carousel__item img {
  width: 100%;
}
.image {
  height: 53.333vw;
}
</style>
