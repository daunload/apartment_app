<template>
  <div class="wrapper">
    <div class="title">
      <img src="@/assets/ic-commu-write-info.svg" /> {{ title }}
    </div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #f7f9ff;
  border: 0.1vw solid #c0cdf1;
  padding: 4vw 5.3vw;
  border-radius: 1.3vw;
  margin-top: 3.2vw;
}
.title {
  font-weight: bold;
  margin-bottom: 3.4667vw;
  font-size: 3.2vw;
  display: flex;
  align-items: center;
}
.description {
  font-size: 3.2vw;
  line-height: 1.58;
}
</style>
