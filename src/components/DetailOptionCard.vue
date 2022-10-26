<template>
  <div class="wrapper">
    <div class="left-text">
      <div class="left-top-wrapper">
        <span class="top">{{ leftTitle }}</span>
        <span v-if="useText" class="use">{{ useText }}</span>
      </div>
      <span v-if="leftBottomTitle" class="bottom">{{ leftBottomTitle }}</span>
    </div>
    <div class="right-text">
      <span class="top">{{ rightTitle }}</span>
      <div v-if="rightBottomTitle" class="bottom">{{ rightBottomTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailOptionCard",
  props: {
    leftTitle: {
      type: String,
      require: true,
    },
    useText: {
      type: String,
      require: false,
    },
    leftBottomTitle: {
      type: String,
      require: false,
    },
    rightTitle: {
      type: String,
      require: true,
    },
    rightBottomTitle: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  border-radius: 1.3vw;
  width: 100%;
  height: 20.8vw;
  background-color: #f7f9ff;
  border: 0.13vw solid #c0cdf1;
  padding-left: 4vw;
  padding-right: 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2vw;

  .left-top-wrapper {
    display: flex;
    align-items: center;
  }

  .left-text {
    display: flex;
    flex-direction: column;
  }

  .left-text .bottom {
    font-size: 3.2vw;
  }

  .right-text .bottom {
    font-size: 3.2vw;
    text-align: right;
    color: #8093c6;
  }

  .top {
    font-size: 3.4vw;
    font-weight: bold;
  }
  .bottom {
    margin-top: 1.8vw;
  }
  .use {
    margin-left: 2.133vw;
    padding: 0.533vw 1.867vw;
    border-radius: 2vw;
    background-color: #4c93ff;
    font-size: 2.667vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }
}
</style>
