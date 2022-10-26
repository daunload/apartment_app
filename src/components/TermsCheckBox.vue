<template>
  <div class="wrapper">
    <div class="checkbox" @click="clickedCheckBox">
      <img v-if="isActive === true" src="@/assets/ic-check-b-on.svg" />
      <img v-else src="@/assets/ic-check-b-off.svg" />
    </div>
    <div class="terms-title">개인정보 수집, 이용 동의 약관 동의</div>
    <div class="view-terms">보기</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    clickedCheckBox() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.checkbox {
  margin-right: 1.3333vw;
  width: 4.8vw;
  height: 4.8vw;
}
.terms-title {
  font-size: 3.4667vw;
  margin-right: 2.1333vw;
}
.view-terms {
  color: #8093c6;
  text-decoration: underline;
  font-size: 3.4667vw;
}
</style>
