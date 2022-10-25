<template>
  <div class="">
    <confirm-popup
      :isOpen="isOpen"
      :title="'커뮤니티 시설 이용 등록'"
      :cancelText="'취소'"
      :confirmText="'등록하기'"
    >
      <div slot="content">
        <div class="card">
          <div class="text-wrapper">
            <div class="left-text">
              <div class="left-top-wrapper">
                <span class="top">{{ "프로그램 명" }}</span>
              </div>
            </div>
            <div class="right-text">
              <span class="top">{{ "헬스 월 이용료" }}</span>
            </div>
          </div>
          <div class="text-wrapper">
            <div class="left-text">
              <div class="left-top-wrapper">
                <span class="top">{{ "금액" }}</span>
              </div>
            </div>
            <div class="right-text">
              <span class="top">{{ "월 10,000원" }}</span>
              <div class="bottom">{{ "정기결제" }}</div>
            </div>
          </div>
        </div>
      </div>
    </confirm-popup>
  </div>
</template>

<script>
import ConfirmPopup from "@/components/Popup/ConfirmPopup";

export default {
  components: {
    ConfirmPopup,
  },
  props: {
    isOpen: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  border-radius: 3.2vw;
  padding: 5.3333vw 4vw;
  background-color: rgba(192, 205, 241, 0.17);
  margin-top: 6.6667vw;
  margin-bottom: 10.6667vw;
  font-size: 3.4667vw;
}

.text-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2vw;

  &:last-child {
    margin-bottom: 0;
  }
}

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
}
.bottom {
  margin-top: 1.8vw;
}
</style>
