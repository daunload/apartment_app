<template>
  <div>
    <MonthSelecter :months="['10월', '11월']" />
    <usage-info>
      <div class="title" slot="title">헬스장 월 이용료</div>
      <div slot="info">
        <usage-info-text :leftText="'금액'" :rightText="'월 10,000원'" />
        <usage-info-text
          :leftText="'유효기간'"
          :rightText="'10월9일 ~ 10월31일'"
        />
        <usage-info-text :leftText="'결제방식'" :rightText="'관리비 청구'" />
        <usage-info-text
          :leftText="'정기결제'"
          :rightText="'매월 1일 결제'"
          :warningMultiLineText="[
            '월 단위 이용 가능한 프로그램입니다',
            '유효기간 종료일을 확인해주세요',
          ]"
        />
        <usage-info-text
          :leftText="'결제안내'"
          :multiLineText="[
            'A-PAY 월 포인트 차감',
            '누적 금액 월 지급 포인트',
            '초과 시 익월 관리비에 부과',
          ]"
        />
      </div>
    </usage-info>
    <info-card
      :title="'정기결제 안내'"
      :description="'결제 완료 후 별도 해지시까지 매월 자동으로 연장됩니다. 해지시키려면 결제내역에서 취소해주세요. 월단위 결제의 경우 이용 해지시 결제 완료된 월 말까지 이용 가능합니다.'"
    />

    <div class="usage-info-wrapper">
      <usage-info>
        <div slot="info">
          <usage-info-text :leftText="'이용 상태'" :rightText="'이용중'" />
          <usage-info-text
            :leftText="'최초 신청일'"
            :rightText="'2022.10.07 09:00'"
          />
          <usage-info-text :leftText="'이용 개월수'" :rightText="'1'" />
          <usage-info-text
            :leftText="'다음 결제일'"
            :rightText="'2022.11.01'"
          />
        </div>
      </usage-info>
    </div>

    <div class="checkbox-wrapper">
      <terms-check-box />
    </div>
  </div>
</template>

<script>
import UsageInfo from "@/components/UsageInfo/UsageInfo.vue";
import UsageInfoText from "@/components/UsageInfo/UsageInfoText.vue";
import MonthSelecter from "@/components/DateSelecter/MonthSelecter.vue";
import InfoCard from "@/components/InfoCard.vue";
import TermsCheckBox from "@/components/TermsCheckBox.vue";

export default {
  name: "DetailRegister",
  components: {
    UsageInfo,
    UsageInfoText,
    MonthSelecter,
    InfoCard,
    TermsCheckBox,
  },
};
</script>
<style scoped lang="scss">
.title {
  font-size: 3.7333vw;
  margin-bottom: 5.3333vw;
}

.checkbox-wrapper {
  margin-top: 13.3333vw;
  margin-bottom: 10.93333vw;
}

.usage-info-wrapper {
  margin-top: 3.2vw;
}
</style>
