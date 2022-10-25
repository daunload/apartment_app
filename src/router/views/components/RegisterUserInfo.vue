<template>
  <div>
    <confirm-popup
      :title="'커뮤니티 시설 사용자 정보 등록'"
      :isOpen="isOpen"
      :cancelText="'취소'"
      :confirmText="'저장'"
    >
      <div slot="content">
        <div class="bottom-title">
          <div class="text">
            커뮤니티 시설 이용을 위해 사용자 정보 등록이 필요합니다
          </div>
        </div>
        <div class="birthday">
          <div class="left-text">생년월일</div>
          <div class="birthday-picker">
            <img src="@/assets/ic-filter-calendar.svg" />
            <div class="placeholder">날짜 선택</div>
          </div>
        </div>
        <div class="gender">
          <div class="left-text">성별</div>
          <div class="gender-selecter">
            <div class="man">
              <img src="@/assets/ic-radio-b-off.svg" />
              남
            </div>
            <div class="woman">
              <img src="@/assets/ic-radio-b-off.svg" />
              여
            </div>
          </div>
        </div>
        <div class="phone-number">
          <div class="left-text">연락처</div>
          <div class="number">010-1234-5678</div>
        </div>
        <div class="check-box-wrapper">
          <terms-check-box />
        </div>
      </div>
    </confirm-popup>
  </div>
</template>

<script>
import ConfirmPopup from "@/components/Popup/ConfirmPopup";
import TermsCheckBox from "@/components/TermsCheckBox";

export default {
  components: {
    ConfirmPopup,
    TermsCheckBox,
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
.check-box-wrapper {
  margin: 10.6667vw 0;
}

.bottom-title {
  display: flex;
  justify-content: center;
  margin-top: 2.6667vw;
  margin-bottom: 8vw;

  & .text {
    color: #76819e;
    font-size: 3.2vw;
    max-width: 44.8vw;
    text-align: center;
  }
}

.left-text {
  font-size: 3.4667vw;
  width: 12.8vw;
  color: #222222;
}

.birthday {
  margin-bottom: 4.8vw;
  display: flex;
  align-items: center;

  & .birthday-picker {
    display: flex;
    width: 53.3333vw;
    height: 9.3333vw;
    padding: 2.6667vw;
    border-radius: 1.3333vw;
    border: solid 0.2667vw #e4e6ef;
    margin-left: 3.2vw;

    & img {
      margin-right: 1.8667vw;
    }

    & .placeholder {
      color: #b5b5c3;
      font-size: 3.2vw;
    }
  }
}

.gender {
  display: flex;
  margin-bottom: 8vw;

  & .gender-selecter {
    display: flex;

    & .man {
      margin-right: 7.7333vw;
    }
  }
}

.gender-selecter img {
  margin-right: 2.6667vw;
}

.phone-number {
  display: flex;
}
</style>
