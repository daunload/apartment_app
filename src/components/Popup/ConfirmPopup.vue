<template>
  <dialog-card :isOpen="isOpen">
    <div slot="dialog-content">
      <div class="popup">
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
  </dialog-card>
</template>

<script>
import DialogCard from "@/components/Popup/DialogCard";

export default {
  name: "ConfirmPopup",
  components: {
    DialogCard,
  },
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
.popup {
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
  font-weight: bold;
}
.buttons {
  display: flex;
  justify-content: space-between;

  & button {
    color: #fff;
    font-size: 3.7333vw;
    width: 32.5333vw;
    height: 12vw;
    font-weight: bold;
  }

  & button.cancel {
    background-color: #c8cddb;
  }

  & button.confirm {
    background-color: #4c93ff;
  }
}
</style>
