<template>
  <div>
    <div class="dateHeader">
      <p>2022.10</p>
      <img src="@/assets/filter-off.svg" />
    </div>
    <div class="contentArea">
      <div
        class="rowWrapper"
        style="justify-content: space-between; margin-bottom: 0.8vw"
      >
        <p class="subTitle">총 10 건</p>
        <p class="dateText">2022-11-11 ~ 2022-11-17</p>
      </div>
      <p class="myPointText">20,000,000P</p>

      <div class="infoWrapper">
        <div
          class="rowWrapper"
          style="justify-content: space-between; padding: 4vw 4vw 3.6vw 4vw"
        >
          <div class="rowWrapper" style="align-items: center">
            <p class="infoTitle">샘물 헬스 아카테미</p>
            <img src="@/assets/ic-set-more.svg" style="margin-left: 1.333vw" />
          </div>
          <p class="infoTitle">19,400P</p>
        </div>
        <div class="line" />
        <div class="infoTextWrapper">
          <div
            class="rowWrapper"
            style="justify-content: space-between; margin-bottom: 4.8vw"
          >
            <p class="subTitle">결제 일시</p>
            <p class="subTitle">2022-11-11 11:11:11</p>
          </div>
          <div
            class="rowWrapper"
            style="justify-content: space-between; margin-bottom: 4.8vw"
          >
            <p class="subTitle">프로그램/상품</p>
            <p class="subTitle">헬스+운동복 1개월</p>
          </div>
          <div
            class="rowWrapper"
            style="justify-content: space-between; margin-bottom: 4.8vw"
          >
            <p class="subTitle">예약일</p>
            <p class="subTitle">2021년 11월 25일(금)</p>
          </div>
          <div
            class="rowWrapper"
            style="justify-content: space-between; margin-bottom: 4.8vw"
          >
            <p class="subTitle">유효기간</p>
            <p class="subTitle">없음</p>
          </div>
          <div class="rowWrapper" style="justify-content: space-between">
            <p class="cancelPaymentText">결제취소</p>
            <div class="successPaymentWrapper">
              <p class="successPaymentText">결제 완료</p>
            </div>
          </div>
        </div>
      </div>

      <div class="infoWrapper">
        <div
          class="rowWrapper"
          style="justify-content: space-between; padding: 4vw 4vw 3.6vw 4vw"
        >
          <div class="rowWrapper" style="align-items: center">
            <p class="infoTitle">샘물 헬스 아카테미</p>
            <img src="@/assets/ic-set-more.svg" style="margin-left: 1.333vw" />
          </div>
          <p
            class="infoTitle"
            style="color: #b5b5b5; text-decoration: line-through"
          >
            19,400P
          </p>
        </div>
        <div class="line" />
        <div class="infoTextWrapper">
          <div
            class="rowWrapper"
            style="justify-content: space-between; margin-bottom: 4.8vw"
          >
            <p class="subTitle">결제 일시</p>
            <p class="subTitle">2022-11-11 11:11:11</p>
          </div>
          <div
            class="rowWrapper"
            style="justify-content: space-between; margin-bottom: 4.8vw"
          >
            <p class="subTitle">프로그램/상품</p>
            <p class="subTitle">헬스+운동복 1개월</p>
          </div>
          <div
            class="rowWrapper"
            style="justify-content: space-between; margin-bottom: 4.8vw"
          >
            <p class="subTitle">예약일</p>
            <p class="subTitle">2021년 11월 25일(금)</p>
          </div>
          <div
            class="rowWrapper"
            style="justify-content: space-between; margin-bottom: 4.8vw"
          >
            <p class="subTitle">유효기간</p>
            <p class="subTitle">없음</p>
          </div>
          <div style="display: flex; justify-content: flex-end">
            <div class="cancelSuccessPaymentWrapper">
              <p class="successPaymentText">취소 완료</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsageHistory",
};
</script>

<style scoped lang="scss">
.line {
  height: 0.533vw;
  border: solid 0.267vw #ebedf3;
}
.rowWrapper {
  display: flex;
  flex-direction: row;
}
.subTitle {
  font-size: 3.467vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #222;
}
.dateText {
  font-size: 2.933vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.31px;
  color: #787878;
}
.dateHeader {
  display: flex;
  justify-content: space-between;
  height: 13.867vw;
  padding: 4.667vw 4vw;
  border: solid 1px #ebedf3;
  background-color: #fff;
}

.contentArea {
  display: flex;
  height: auto;
  flex-direction: column;
  flex: 1;
  padding: 2.667vw 4vw;
  background-color: #f2f3f7;
  .myPointText {
    font-family: NanumSquareEB;
    font-size: 3.467vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    text-align: right;
    color: #007bff;
  }

  .infoWrapper {
    margin: 4vw 0;
    border-radius: 5px;
    border: solid 0.267vw #ebedf3;
    background-color: #fff;

    .infoTitle {
      font-size: 3.733vw;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.14;
      letter-spacing: normal;
      color: #222;
    }

    .infoTextWrapper {
      padding: 4.8vw 4vw;

      .cancelPaymentText {
        font-size: 3.2vw;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #b5b5b5;
        text-decoration: underline;
      }

      .successPaymentWrapper {
        width: 18vw;
        height: 5.867vw;
        padding: 1.333vw 2.133vw;
        border-radius: 2.933vw;
        background-color: #ff5970;
      }
      .cancelSuccessPaymentWrapper {
        width: 18vw;
        height: 5.867vw;
        padding: 1.333vw 2.133vw;
        border-radius: 2.933vw;
        background-color: #b5b5b5;
      }
      .successPaymentText {
        font-size: 3.2vw;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>
