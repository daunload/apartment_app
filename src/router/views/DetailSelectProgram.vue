<template>
  <div class="container">
    <div class="titleWrapper">
      <p class="title">{{ program.name }}</p>
      <p class="description">{{ program.description }}</p>
    </div>
    <div v-for="(program, index) in program.programs" :key="index">
      <ProgramCard
        :leftTitle="program.name"
        :leftBottomTitle="program.description"
        :rightTitle="program.payment"
        :rightBottomTitle="getRegularPayment(program.isRegularPayment)"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { communityProgramDummy } from "@/../public/DummyData";
import ProgramCard from "@/components/DetailOptionCard.vue";

export default Vue.extend({
  name: "DetailSelectProgram",
  components: { ProgramCard },
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
  padding: 8vw 0;

  .titleWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5.867vw;

    .title {
      font-size: 3.733vw;
      font-weight: normal;
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
