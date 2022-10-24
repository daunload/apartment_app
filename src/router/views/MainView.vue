<template>
  <div class="container">
    <router-link to="/listView">커뮤니티 리스트</router-link>
    <router-link to="/detailView/1">커뮤니티 상세</router-link>
    <router-link to="/register">신청 페이지 </router-link>
    <router-link to="/selectProgram/4">프로그램 선택</router-link>
    <router-link to="/selectTime">프로그램 시간 선택</router-link>
  </div>
</template>

<script>
export default {
  name: "MainView",
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
</style>
