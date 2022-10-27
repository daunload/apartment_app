<template>
  <div v-if="isOpen">
    <div class="overlay"></div>
    <div id="popup" class="popup-wrapper">
      <vc-date-picker
        v-model="selectedDateRange"
        is-range
        is-expanded
        :locale="{ id: 'en', firstDayOfWeek: 2, masks: { weekdays: 'WWW' } }"
        :attribute="calendarAttributes"
      />
      <div class="footer">
        <div class="selected-date-text">
          {{ selectedDayText }}
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
import dayjs from "dayjs";

export default {
  props: {
    isOpen: {
      type: Boolean,
      require: true,
    },
    datesInfo: {
      type: Array,
      require: false,
    },
  },
  data() {
    return {
      selectedDateRange: {
        start: null,
        end: null,
      },
      selectedDayText: "",
      calendarAttributes: [],
    };
  },
  created() {
    this.calendarAttributes = {
      dot: {
        style: {
          backgroundColor: "#4c93ff",
        },
      },
      dates: this.datesInfo.map((dateInfo) => dateInfo.date),
    };
  },
  watch: {
    selectedDateRange() {
      const startDate = this.selectedDateRange.start;
      const endDate = this.selectedDateRange.end;

      const formatStartDate = dayjs(startDate).format("YYYY년 MM월 DD일");
      const formatEndDate = dayjs(endDate).format("MM월 DD일");

      if (this.isSameDate(startDate, endDate)) {
        this.selectedDayText = `${formatStartDate}`;
      } else {
        this.selectedDayText = `${formatStartDate} ~ ${formatEndDate}`;
      }
    },
  },
  computed: {
    isSelected() {
      return this.selectedDayText !== "";
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
    },
    cancel() {
      this.$emit("update:isOpen", false);
    },
    confirm() {
      this.$emit("update:isOpen", false);
    },
    isSameDate(startDate, endDate) {
      return (
        startDate.getFullYear() === endDate.getFullYear() &&
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getDate() === endDate.getDate()
      );
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
  padding: 0 0 3.7333vw 0;
  border-bottom: solid 0.2667vw #f4f4f4;
}
.footer {
  background-color: #fff;
  height: 14.1333vw;
  width: 100%;
  color: #787878;
  display: flex;
  padding-left: 4vw;
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
