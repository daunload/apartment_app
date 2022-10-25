<template>
  <div v-if="isOpen" class="wrapper">
    <div class="overlay"></div>
    <div class="popup-wrapper">
      <div class="popup">
        <div class="content-wrapper">
          <div class="popup-title">{{ title }}</div>
          <slot name="content"></slot>
        </div>
        <div class="button-wrapper">
          <button class="confirm" @click="clickedConfirm">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertPopup",
  props: {
    title: {
      type: String,
      require: true,
    },
    confirmText: {
      type: String,
      require: true,
    },
    isOpen: {
      type: Boolean,
      require: true,
    },
  },
  methods: {
    clickedConfirm() {
      this.$emit("clicked-confirm");
    },
  },
};
</script>

<style scoped lang="scss">
.overlay {
  border-radius: inherit;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: inherit;
  width: 100%;
  will-change: opacity;
  background-color: rgba(0, 0, 0, 0.4);
}

.popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  margin: 9.8667vw;
  height: 100%;
}

.content-wrapper {
  padding: 6.6667vw 5.3333vw 0 6.6667vw;
}

.popup {
  background-color: #fff;
  border-radius: 3.2vw;
  width: 80vw;
  box-shadow: 0 1.3333vw 2.6667vw 0 rgba(75, 88, 122, 0.15);
}

.popup-title {
  width: 100%;
  text-align: center;
  font-size: 4vw;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;

  & button {
    color: #fff;
    font-size: 3.7333vw;
    width: 100%;
    height: 12vw;
  }
  & button.confirm {
    color: #4c93ff;
    padding: 4.2667vw 0;
    border-top: 0.2667vw solid #eee;
  }
}
</style>
