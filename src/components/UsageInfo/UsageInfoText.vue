<template>
  <div class="info-text-wrapper">
    <div class="left-text">{{ leftText }}</div>
    <div class="right-text">
      <div v-if="isMultiLineText() === true" class="multiline-text">
        <div v-for="(text, index) in multiLineText" :key="index">
          {{ text }}
        </div>
      </div>
      <div v-else class="right-text" :class="{ bold: isRightBold }">
        {{ rightText }}
      </div>
      <div v-if="warningText" class="warning-text"></div>
      <div v-else-if="warningMultiLineText" class="warning-text multiline-text">
        <div v-for="(text, index) in warningMultiLineText" :key="index">
          <div class="right-text">{{ text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsageInfoText",
  props: {
    leftText: {
      type: String,
      require: true,
    },
    rightText: {
      type: String,
      require: false,
    },
    isRightBold: {
      type: Boolean,
      require: false,
    },
    multiLineText: {
      type: Array,
      require: false,
    },
    warningText: {
      type: Array,
      require: false,
    },
    warningMultiLineText: {
      type: Array,
      require: false,
    },
  },
  methods: {
    isMultiLineText() {
      if (this.multiLineText === undefined) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped lang="scss">
.info-text-wrapper {
  margin-bottom: 3.2vw;
  display: flex;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }
}

.bold {
  font-weight: bold;
}

.left-text {
  font-size: 3.4667vw;
  font-weight: bold;
}
.right-text {
  text-align: right;
  font-size: 3.4667vw;
}

.multiline-text {
  text-align: right;
}

.warning-text {
  color: #ff5970;
  font-size: 2.9333vw;
  line-height: 4vw;
  letter-spacing: normal;
  margin-top: 1.3333vw;
}
</style>
