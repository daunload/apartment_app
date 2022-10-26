<template>
  <div class="labelWrapper">
    <p class="label">{{ label }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "LabelWrapper",
  props: {
    label: {
      type: String,
      require: true,
      default: "",
    },
    text: {
      type: String,
      require: true,
      default: "",
    },
  },
});
</script>

<style scoped lang="scss">
.labelWrapper {
  display: flex;
  flex-direction: row;
  margin: 0 0 3.2vw 0;

  .label {
    width: 17.0667vw;
    font-size: 3.467vw;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: normal;
    color: #222;
  }
  .text {
    font-size: 3.4667vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: -0.1px;
    color: #222;
    max-width: 66.933vw;
  }
}
</style>
