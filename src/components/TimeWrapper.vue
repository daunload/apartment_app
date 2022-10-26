<template>
  <div
    class="timeContainer"
    :class="[
      isSelect ? 'select' : 'notSelect',
      isActive ? 'active' : 'disable',
    ]"
    @click="clicked"
  >
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
    isActive: {
      type: Boolean,
      require: true,
      default: true,
    },
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
  methods: {
    clicked() {
      if (this.isActive) {
        this.$emit("clicked");
      }
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
  border: solid 0.2667vw #4c93ff;
  margin: 1.067vw 0.8vw;

  &.active.select {
    background-color: #4c93ff;
  }
  &.active.notSelect {
    background-color: #ffffff;
  }
  &.disable {
    background-color: #efefef;
    border: unset;
  }

  .timeText {
    font-size: 3.2vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.92;
    letter-spacing: -0.1333vw;
    text-align: center;

    &.selectText {
      color: #fff;
    }
    &.notSelectText {
      color: #4c93ff;
    }
  }

  &.disable {
    & .timeText {
      color: #787878;
    }
  }
}
</style>
