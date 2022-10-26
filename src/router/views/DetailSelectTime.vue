<template>
  <div>
    <TopTitleBar :title="'탁구장'" />
    <div class="container">
      <div class="headerWrapper">
        <p class="selectDateText">이용일 선택</p>
        <p class="description">
          탁구장, 라켓과 공 대여는 관리사무소에 문의해주세요
        </p>
        <div class="selectDateButton">
          <p class="selectDateButtonText">2022년 10월 8일</p>
        </div>
      </div>
      <p class="timeArea-title">시간 선택</p>
      <div class="timeArea">
        <div v-for="(time, index) in times" :key="index" class="listWrapper">
          <TimeWrapper :timeText="time" />
        </div>
        <div
          v-for="(time, index) in times"
          :key="`${index}-selected`"
          class="listWrapper"
        >
          <TimeWrapper :timeText="time" :isSelect="true" />
        </div>
      </div>
      <div class="currentTimeContainer">
        <div>
          <p class="currentDate">2022년 10월 8일</p>
          <p class="currentTime">09:00~09:30</p>
        </div>
        <div class="confirmButton">
          <p class="confirmButtonText">등록하기</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TimeWrapper from "@/components/TimeWrapper.vue";
import { timeDummy } from "@/../public/DummyData";
import TopTitleBar from "@/components/TopTitleBar.vue";

export default Vue.extend({
  name: "DetailSelectTime",
  components: { TimeWrapper, TopTitleBar },
  data() {
    return {
      times: timeDummy,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  padding: 4vw;
  .headerWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .selectDateText {
      font-size: 3.733vw;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: normal;
      text-align: center;
      color: #000;
      margin-bottom: 1.067vw;
    }
    .description {
      font-size: 2.933vw;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.18;
      letter-spacing: normal;
      text-align: center;
      color: #8093c6;
      margin-bottom: 4vw;
    }
    .selectDateButton {
      width: 57.867vw;
      height: 9.333vw;
      padding: 2.667vw 4vw;
      border-radius: 1.333vw;
      border: solid 1px #e4e6ef;
      background-color: #fff;
      margin-bottom: 8vw;

      .selectDateButtonText {
        font-size: 3.2vw;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #222;
      }
    }
  }

  .timeArea-title {
    font-weight: bold;
    margin-bottom: 4vw;
  }
  .timeArea {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 12.8vw;
  }
  .currentTimeContainer {
    height: 20.8vw;
    padding: 5.867vw 4vw;
    border-radius: 1.333vw;
    border: solid 0.133vw #c0cdf1;
    background-color: #f7f9ff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .currentDate {
      font-size: 3.2vw;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.42;
      letter-spacing: normal;
      color: #222;
    }
    .currentTime {
      font-size: 3.467vw;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      color: #222;
    }

    .confirmButton {
      width: 19.733vw;
      height: 6.667vw;
      padding: 1.6vw 4vw;
      background-color: #4c93ff;

      .confirmButtonText {
        font-size: 3.2vw;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.08;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>
