<template>
  <div v-if="isOpen" id="dialog-wrapper">
    <div id="overlay" />
    <div id="card-wrapper">
      <div id="card">
        <slot name="dialog-content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
#overlay {
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  will-change: opacity;
  background-color: rgba(0, 0, 0, 0.4);
}

#card-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
}
#card {
  border-radius: 1.3333vw;
  border: solid 0.2667vw #ebedf3;
  background-color: #fff;

  margin: 9.8667vw;
}
</style>
