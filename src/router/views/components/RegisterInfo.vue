<template>
  <alert-popup
    :isOpen="isOpen"
    :title="'커뮤니티 이용 신청 안내'"
    :confirmText="'확인'"
  >
    <div slot="content" class="text">
      이용하려면 관리사무소를 방문하여 사진 촬영 및 출입수단 등록이 필요합니다.
      등록 완료 후 이용해주세요
    </div>
  </alert-popup>
</template>

<script>
import AlertPopup from "@/components/Popup/AlertPopup";

export default {
  components: {
    AlertPopup,
  },
  props: {
    isOpen: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style>
.text {
  width: 100%;
  border-radius: 3.2vw;
  padding: 4vw;
  background-color: rgba(192, 205, 241, 0.17);
  margin-top: 6.6667vw;
  margin-bottom: 7.4667vw;
  font-size: 3.4667vw;
}
</style>
