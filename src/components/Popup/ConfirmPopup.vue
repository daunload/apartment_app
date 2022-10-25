<template>
  <div v-if="isOpen" class="wrapper">
    <div class="overlay"></div>
    <div class="dialog-wrapper">
      <div class="dialog">
        <div class="modal-title">{{ title }}</div>
        <slot name="content"></slot>
        <div class="buttons">
          <button class="cancel" @click="clickedCancel">
            {{ cancelText }}
          </button>
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
  name: "ConfirmPopup",
  props: {
    title: {
      type: String,
      require: true,
    },
    cancelText: {
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
    clickedCancel() {
      this.$emit("clicked-cancel");
    },
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

.dialog-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  margin: 9.8667vw;
  height: 100%;
}

.dialog {
  background-color: #fff;
  padding: 6.6667vw 5.3333vw;
  border-radius: 3.2vw;
  width: 80vw;
  box-shadow: 0 1.3333vw 2.6667vw 0 rgba(75, 88, 122, 0.15);
}

.modal-title {
  width: 100%;
  text-align: center;
  font-size: 4vw;
}
.buttons {
  display: flex;
  justify-content: space-between;

  & button {
    color: #fff;
    font-size: 3.7333vw;
    width: 32.5333vw;
    height: 12vw;
  }

  & button.cancel {
    background-color: #c8cddb;
  }

  & button.confirm {
    background-color: #4c93ff;
  }
}
</style>
