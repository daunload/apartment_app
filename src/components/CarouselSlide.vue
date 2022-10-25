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

#wrapper::v-deep .v-.v-carousel__controls__item .v-icon {
  font-size: 1.8667vw !important;
  opacity: 1;
  width: unset;
  height: unset;
}

#wrapper::v-deep .v-btn:before {
  opacity: 0;
}
#wrapper::v-deep .v-btn--icon.v-btn--active .v-icon {
  color: #4c93ff;
}
#wrapper::v-deep .v-btn--icon.v-size--small .v-icon {
  font-size: 1.8667vw !important;
  opacity: 1;
  width: unset;
  height: unset;
}
#wrapper::v-deep .v-carousel__controls .v-btn--icon.v-size--small {
  width: unset;
  height: unset;
}
</style>
