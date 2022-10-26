<template>
  <div>
    <TopTitleBar :title="program.name" />
    <div class="container">
      <div class="titleWrapper">
        <p class="title">{{ program.name }}</p>
        <p class="description">{{ program.description }}</p>
      </div>
      <div v-for="(program, index) in program.programs" :key="index">
        <detail-option-card
          :leftTitle="program.name"
          :leftBottomTitle="program.description"
          :rightTitle="program.payment"
          :rightBottomTitle="getRegularPayment(program.isRegularPayment)"
        ></detail-option-card>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { communityProgramDummy } from "@/../public/DummyData";
import DetailOptionCard from "@/components/DetailOptionCard.vue";
import TopTitleBar from "@/components/TopTitleBar.vue";

export default Vue.extend({
  name: "DetailSelectProgram",
  components: { DetailOptionCard, TopTitleBar },
  data() {
    return {
      program: {},
    };
  },
  beforeMount() {
    this.getCommunityPrograms();
  },
  methods: {
    getCommunityPrograms() {
      const programId = parseInt(this.$route.params.id);
      this.program = communityProgramDummy
        .filter((cummunity) => cummunity.programId == programId)
        .pop();
    },
    getRegularPayment(getRegularPayment) {
      return getRegularPayment ? "정기결제" : "";
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  padding: 8vw 4vw;

  .titleWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5.867vw;

    .title {
      font-size: 3.733vw;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: normal;
      color: #000;
    }

    .description {
      font-size: 3.2vw;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      color: #8093c6;
    }
  }
}
</style>
