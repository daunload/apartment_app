<template>
  <div class="wrapper">
    <img src="@/assets/ic-back-white.svg" @click="goBack" />
    <div class="title">{{ title }}</div>
    <div />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TopTitleBar",
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #4c93ff;
  height: 14.667vw;
  width: 100vw;
  padding: 5.333vw 4vw;
}
.title {
  font-size: 4.533vw;
  color: #fff;
}
</style>
