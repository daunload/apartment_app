<template>
  <div v-if="isOpen">
    <div class="overlay"></div>
    <div id="popup" class="popup-wrapper">
      <Calendar
        is-expanded
        :attributes="attributes"
        :min-date="new Date()"
        :locale="{ id: 'en', firstDayOfWeek: 2, masks: { weekdays: 'WWW' } }"
        @dayclick="onDayClick"
      >
      </Calendar>
      <div class="footer">
        <div class="selected-date-text">
          {{ dates }}
        </div>
        <div class="buttons">
          <button class="cancel" @click="cancel">취소</button>
          <button
            class="apply"
            :class="{ active: isSelected }"
            @click="confirm"
          >
            적용
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import dayjs from "dayjs";

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
  data() {
    return {
      selectedDayText: "",
      selectDays: [],
      // attributes: [
      //   {
      //     dot: {
      //       style: {
      //         backgroundColor: "#4c93ff",
      //       },
      //     },
      //     dates: [
      //       new Date(2022, 9, 27),
      //       new Date(2022, 9, 28),
      //       new Date(2022, 9, 29),
      //       new Date(2022, 9, 30),
      //       new Date(2022, 9, 31),
      //     ],
      //   },
      //   {
      //     dot: {
      //       style: {
      //         backgroundColor: "#efefef",
      //       },
      //     },
      //     dates: [
      //       new Date(2022, 9, 1),
      //       new Date(2022, 9, 2),
      //       new Date(2022, 9, 3),
      //       new Date(2022, 9, 4),
      //       new Date(2022, 9, 5),
      //       new Date(2022, 9, 6),
      //       new Date(2022, 9, 7),
      //       new Date(2022, 9, 8),
      //       new Date(2022, 9, 9),
      //       new Date(2022, 9, 10),
      //       new Date(2022, 9, 11),
      //       new Date(2022, 9, 12),
      //       new Date(2022, 9, 13),
      //       new Date(2022, 9, 14),
      //       new Date(2022, 9, 15),
      //       new Date(2022, 9, 16),
      //       new Date(2022, 9, 17),
      //       new Date(2022, 9, 18),
      //       new Date(2022, 9, 19),
      //       new Date(2022, 9, 20),
      //       new Date(2022, 9, 21),
      //       new Date(2022, 9, 22),
      //       new Date(2022, 9, 23),
      //       new Date(2022, 9, 24),
      //       new Date(2022, 9, 25),
      //       new Date(2022, 9, 26),
      //     ],
      //   },
      //   {
      //     highlight: {
      //       start: { fillMode: "outline" },
      //       base: { fillMode: "light" },
      //       end: { fillMode: "outline" },
      //     },
      //     dates: { start: new Date(2022, 10, 14), end: new Date(2022, 10, 18) },
      //   },
      // ],
    };
  },
  computed: {
    dates() {
      return this.selectDays.map((day) => dayjs(day.date).format("YYYY-MM-DD"));
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
    isSelected() {
      return this.selectDays.length > 0;
    },
  },
  watch: {
    selectDays() {
      //기간 반환하는 함수
      this.selectedDayText = "";
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.selectDays.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.selectDays.splice(idx, 1);
      } else {
        this.selectDays.push({
          id: day.id,
          date: day.date,
        });
      }
      console.log(this.selectDays);
    },
    cancel() {
      this.$emit("update:isOpen", false);
    },
    confirm() {
      this.$emit("update:isOpen", false);
    },
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
#popup::v-deep .vc-arrow {
  backdrop-filter: #000;
}

.popup-wrapper::v-deep .vc-container {
  border-radius: unset;
  border-top-left-radius: 1.3333vw;
  border-top-right-radius: 1.3333vw;
  border: unset;
}
.popup-wrapper::v-deep .vc-weeks {
  margin: 0 4vw;
  padding: 0;
  border-bottom: solid 0.2667vw #f4f4f4;
}
.footer {
  background-color: #fff;
  height: 14.1333vw;
  width: 100%;
  color: #787878;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 1.3333vw;
  border-bottom-right-radius: 1.3333vw;
  & .selected-date-text {
    max-width: 45.3333vw;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 3.4667vw;
    color: #222;
  }
  & .buttons {
    display: flex;
  }
  & button {
    font-weight: bold;
    display: flex;
    padding: 0 3.2vw;
    align-items: center;
    font-size: 3.4667vw;
    &.apply {
      margin-right: 2.1333vw;
    }
    &.active.apply {
      color: #4c93ff;
    }
  }
}
</style>
