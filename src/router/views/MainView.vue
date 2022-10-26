<template>
  <div class="container">
    <router-link to="/listView">커뮤니티 리스트</router-link>
    <router-link to="/detailView/1">커뮤니티 상세</router-link>
    <router-link to="/register">신청 페이지 </router-link>
    <router-link to="/selectProgram/4">프로그램 선택</router-link>
    <router-link to="/selectTime">프로그램 시간 선택</router-link>

    <v-btn @click="button1 = true"> 커뮤니티 이용 신청 안내 팝업 </v-btn>
    <v-btn @click="button2 = true"> 커뮤니티 시설 사용자 정보 등록 </v-btn>
    <v-btn @click="button3 = true"> 커뮤니티 시설 이용 등록 </v-btn>
    <v-btn @click="button4 = true"> 커뮤니티 시설 이용 등록 (사물함) </v-btn>
    <v-btn @click="button5 = true">달력</v-btn>

    <!-- 커뮤니티 이용 신청 안내 팝업 -->
    <register-info :isOpen.sync="button1" />
    <!-- 커뮤니티 시설 이용 등록 -->
    <register-user-info :isOpen.sync="button2" />
    <!-- 커뮤니티 시설 이용 등록  -->
    <sign-up-popup :isOpen.sync="button3" />
    <!-- 커뮤니티 시설 이용 등록  -->
    <register-locker-popup :isOpen.sync="button4" />
    <!-- 캘린더 모달 -->
    <calendar-picker :isOpen.sync="button5" />
  </div>
</template>

<script>
import RegisterUserInfo from "@/router/views/components/RegisterUserInfo";
import RegisterInfo from "@/router/views/components/RegisterInfo";
import SignUpPopup from "@/router/views/components/SignUpPopup";
import RegisterLockerPopup from "@/router/views/components/RegisterLockerPopup";
import CalendarPicker from "@/components/DateSelecter/CalendarPicker";

export default {
  name: "MainView",
  components: {
    RegisterUserInfo,
    RegisterInfo,
    SignUpPopup,
    RegisterLockerPopup,
    CalendarPicker,
  },
  data() {
    return {
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
    };
  },
  methods: {
    clickedButton(button) {
      switch (button) {
        case 1:
          this.button1 = true;
          break;
        case 2:
          this.button2 = true;
          break;
        case 3:
          this.button3 = true;
          break;
        case 4:
          this.button4 = true;
          break;
        case 5:
          this.button5 = true;
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
</style>
