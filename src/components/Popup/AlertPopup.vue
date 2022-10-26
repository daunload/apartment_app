<template>
  <div>
    <dialog-card :isOpen="isOpen">
      <div slot="dialog-content">
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
    </dialog-card>
  </div>
</template>

<script>
import DialogCard from "@/components/Popup/DialogCard";

export default {
  name: "AlertPopup",
  components: {
    DialogCard,
  },
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
  font-weight: bold;
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
    font-weight: bold;
  }
}
</style>
