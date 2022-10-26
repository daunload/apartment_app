<template>
  <div>
    <div ref="button-space"></div>
    <div class="button-wrapper" ref="bottom-confirm">
      <button class="confirm-button">{{ confirmText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomConfirm",
  props: {
    confirmText: {
      type: String,
      require: true,
    },
  },
  computed: {
    isActive() {
      return this.active;
    },
  },
  mounted() {
    const componentHeight = this.$refs["bottom-confirm"].clientHeight;
    this.$refs["button-space"].style.marginBottom = `${componentHeight}px`;
  },
  methods: {
    confirmClicked() {
      if (this.active) {
        this.$emit("confirmed");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.button-wrapper {
  position: fixed;
  bottom: 0;
  box-shadow: 0 -2px 4px 0 rgba(75, 88, 122, 0.15);
  padding: 5.0667vw 4vw;

  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
}

.confirm-button {
  background-color: #ff5970;
  color: #fff;
  font-size: 3.7333vw;
  width: 92vw;
  font-weight: bold;
  height: 12vw;
  border-radius: 0.8vw;
}
</style>
