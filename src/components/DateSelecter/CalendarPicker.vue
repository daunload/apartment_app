<template>
  <div v-if="isOpen">
    <div class="overlay"></div>
    <div class="popup-wrapper">
      <Calendar
        is-expanded
        :locale="{ id: 'en', firstDayOfWeek: 2, masks: { weekdays: 'WWW' } }"
      >
      </Calendar>
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";

export default {
  props: {
    isOpen: {
      type: Boolean,
      require: true,
    },
  },
  components: {
    Calendar,
  },
};
</script>

<style scoped lang="scss">
.overlay {
  border-radius: inherit;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: inherit;
  width: 100%;
  will-change: opacity;
  background-color: rgba(0, 0, 0, 0.4);
}

.popup-wrapper {
  width: 83.7333vw;
  left: 0;
  position: fixed;
  top: 0;
  margin: 9.8667vw;
  height: 100%;
}
.bottom-buttons {
  background-color: #fff;
}
</style>
