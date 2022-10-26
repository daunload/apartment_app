<template>
  <div>
    <TopTitleBar :title="communityFacility.title" />
    <div class="container">
      <CarouselSlide :images="communityFacility.images" />
      <p class="title">{{ communityFacility.title }}</p>
      <p class="description">{{ communityFacility.description }}</p>

      <ExpansionPanel @click="clickedNoticeToggle" :isToggled="noticeToggle">
        <p slot="header" class="sub-title">공지사항</p>
        <p slot="content" class="text">{{ communityFacility.notification }}</p>
      </ExpansionPanel>

      <ExpansionPanel @click="clickedGuideToggle" :isToggled="guideToggle">
        <p slot="header" class="sub-title">운영안내</p>
        <div slot="content">
          <LabelWrapper label="시설 위치 " :text="communityFacility.location" />
          <LabelWrapper
            label="운영 시간 "
            :text="
              getOpenTime(
                communityFacility.startTime,
                communityFacility.endTime
              )
            "
          />
          <LabelWrapper
            label="휴게 시간 "
            :text="
              getOpenTime(
                communityFacility.breakStartTime,
                communityFacility.breakEndTime
              )
            "
          />
          <LabelWrapper label="휴일 " :text="communityFacility.holiday" />
          <LabelWrapper label="문의 " :text="communityFacility.phone" />
          <div class="line" />
          <p class="subTitle">편의시설</p>
          <div class="amenity">
            <div
              class="amenityWrapper"
              v-for="(amenity, index) in communityFacility.amenities"
              :key="index"
            >
              <div class="iconWrapper">
                <img class="icon" :src="amenity.icon" />
              </div>
              <p class="iconName">{{ amenity.name }}</p>
            </div>
          </div>
          <div class="line" />
          <p class="subTitle">주의사항</p>
          <p class="text">주의사항 입니다.</p>
        </div>
      </ExpansionPanel>

      <p class="subTitle">운영 프로그램</p>
      <div
        v-for="(program, index) in communityFacility.operationalPrograms"
        :key="index"
      >
        <div @click="click(program.programId)">
          <ProgramCard
            :leftTitle="program.name"
            :leftBottomTitle="program.description"
            :rightTitle="program.payment"
            :useText="getUseedText(program.isUse)"
            :rightBottomTitle="getRegularPayment(program.isRegularPayment)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { communityDetailDummy } from "@/../public/DummyData";
import CarouselSlide from "@/components/CarouselSlide.vue";
import ProgramCard from "@/components/DetailOptionCard.vue";
import LabelWrapper from "@/components/DetailLabelWrapper.vue";
import ExpansionPanel from "@/components/ExpansionPanel.vue";
import TopTitleBar from "@/components/TopTitleBar.vue";

export default {
  name: "DetailView",
  components: {
    CarouselSlide,
    ProgramCard,
    LabelWrapper,
    ExpansionPanel,
    TopTitleBar,
  },
  data() {
    return {
      communityFacility: {},
      guideToggle: false,
      noticeToggle: false,
    };
  },
  beforeMount() {
    this.getCommunityFacility();
  },
  methods: {
    getCommunityFacility() {
      const communityFacilityId = parseInt(this.$route.params.id);
      this.communityFacility = communityDetailDummy
        .filter((cummunity) => cummunity.id == communityFacilityId)
        .pop();
    },
    getUseedText(isUse) {
      return isUse ? "이용중" : "";
    },
    getRegularPayment(getRegularPayment) {
      return getRegularPayment ? "정기결제" : "";
    },
    getOpenTime(startTime, endTime) {
      return `${startTime} ~ ${endTime}`;
    },
    clickedGuideToggle() {
      this.guideToggle = !this.guideToggle;
    },
    clickedNoticeToggle() {
      this.noticeToggle = !this.noticeToggle;
    },
    click(id) {
      this.$router.push(`/selectProgram/${id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.sub-title {
  display: flex;
  flex: none;
  font-size: 3.7333vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #0f1e44;
  font-weight: bold;
}
.container {
  padding: 4vw 4.053vw;
  .line {
    height: 1px;
    border: solid 0.5px #c0cdf1;
    margin: 6.533vw 0;
  }
  .image {
    width: 91.893vw;
    height: 53.333vw;
    margin: 0 0 3.2vw 0;
  }
  .title {
    font-size: 4.5333vw;
    margin: 4.8vw 0 3.2vw 0;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #000;
    font-weight: bold;
  }
  .description {
    margin: 0 0 8vw 0;
    font-size: 3.4667vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #787878;
  }
  .subTitle {
    margin: 0 0 5.333vw 0;
    font-size: 3.7333vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: #0f1e44;
    font-weight: bold;
  }
  .notificationWrapper {
    height: 12.533vw;
    padding: 4vw 4.267vw 4vw 4vw;
    border-radius: 1.333vw;
    border: solid 0.133vw #c0cdf1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 4vw 0;
    .notificationTextWrapper {
      display: flex;
      flex-direction: row;
    }
  }
  .label {
    width: 17.0667vw;
    font-size: 3.467vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: normal;
    color: #222;
    font-weight: bold;
  }
  .moreImage {
    object-fit: contain;
  }
  .text {
    font-size: 3.4667vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: -0.1px;
    color: #222;
    max-width: 66.933vw;
  }
  .amenity {
    display: flex;
    flex-direction: row;

    .amenityWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 1.6vw;
    }
    .amenityWrapper:first-child {
      margin-left: 0;
    }
    .amenityWrapper:last-child {
      margin-right: 0;
    }
  }
  .iconWrapper {
    width: 12vw;
    height: 12vw;
    padding: 2.133vw;
    border: solid 1px #eaefff;
    border-radius: 6vw;
    margin: 0 0 1.6vw 0;
  }
  .icon {
    width: 7.733vw;
    height: 7.733vw;
  }
  .iconName {
    font-size: 2.933vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.82;
    letter-spacing: normal;
    color: #222;
  }
}
</style>
