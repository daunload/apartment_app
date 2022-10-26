<template>
  <div class="timeContainer" :class="[isSelect ? 'select' : 'notSelect']">
    <p class="timeText" :class="[isSelect ? 'selectText' : 'notSelectText']">
      {{ timeText }}
    </p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TimeWrapper",
  props: {
    timeText: {
      type: String,
      require: true,
      default: "",
    },
    isSelect: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
.timeContainer {
  width: 21.867vw;
  height: 8.267vw;
  padding: 2.667vw 1.333vw;
  border-radius: 1.867vw;
  border: solid 1px #4c93ff;
  margin: 1.067vw 0.8vw;

  &.select {
    background-color: #4c93ff;
  }
  &.notSelect {
    background-color: #ffffff;
  }

  .timeText {
    font-size: 3.2vw;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.92;
    letter-spacing: -0.5px;
    text-align: center;

    &.selectText {
      color: #fff;
    }
    &.notSelectText {
      color: #4c93ff;
    }
  }
}
</style>
