<template>
  <div class="container">
    <router-link to="/listView">커뮤니티 리스트</router-link>
    <router-link to="/detailView/1">커뮤니티 상세</router-link>
    <router-link to="/register">신청 페이지 </router-link>
    <router-link to="/selectProgram/4">프로그램 선택</router-link>
    <router-link to="/selectTime">프로그램 시간 선택</router-link>

    <!-- 커뮤니티 이용 신청 안내 팝업 -->
    <register-info :isOpen="button1" />
    <!-- 커뮤니티 시설 이용 등록 -->
    <register-user-info :isOpen="button2" />
    <!-- 커뮤니티 시설 이용 등록  -->
    <sign-up-popup :isOpen="button3" />
    <!-- 커뮤니티 시설 이용 등록  -->
    <register-locker-popup :isOpen="button4" />
  </div>
</template>

<script>
import RegisterUserInfo from "@/router/views/components/RegisterUserInfo";
import RegisterInfo from "@/router/views/components/RegisterInfo";
import SignUpPopup from "@/router/views/components/SignUpPopup";
import RegisterLockerPopup from "@/router/views/components/RegisterLockerPopup";

export default {
  name: "MainView",
  components: {
    RegisterUserInfo,
    RegisterInfo,
    SignUpPopup,
    RegisterLockerPopup,
  },
  data() {
    return {
      button1: false,
      button2: false,
      button3: false,
      button4: false,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
</style>
