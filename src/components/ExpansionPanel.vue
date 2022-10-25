<template>
  <v-row class="panelWrapper">
    <v-expansion-panels accordion>
      <v-expansion-panel @click="$emit('click')">
        <v-expansion-panel-header>
          <slot name="header" />
          <template v-slot:actions>
            <img
              :class="{ active: isToggled }"
              class="moreImage"
              src="@/assets/ic-set-more.png"
              srcset="
                @/assets/ic-set-more@2x.png 2x,
                @/assets/ic-set-more@3x.png 3x
              "
            />
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <slot name="content" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ExpansionPanel",
  props: {
    isToggled: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
.panelWrapper::v-deep .v-expansion-panel-content__wrap {
  padding: 0 4vw 4vw;
}
.panelWrapper::v-deep .v-expansion-panel::before {
  box-shadow: unset;
}
.panelWrapper::v-deep .v-expansion-panel-header {
  min-height: unset;
  padding: 4vw;
  display: flex;
  justify-content: space-between;
}
.panelWrapper::v-deep .v-expansion-panel-header__icon {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  transform: rotate(0deg);
}
.panelWrapper::v-deep .v-expansion-panel-header__icon .active {
  transform: rotate(-90deg);
}
.panelWrapper::v-deep .v-expansion-panel--active > .v-expansion-panel-header {
  min-height: unset;
}
.panelWrapper::v-deep .v-expansion-panel-header {
  padding: 4vw;
}

.panelWrapper {
  border-radius: 1.333vw;
  border: solid 0.133vw #c0cdf1;
  margin: 0 0 4vw 0;
  .moreImage {
    object-fit: contain;
  }
}
</style>
