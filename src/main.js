import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import VueRouter from "vue-router";
import VCalendar from "v-calendar";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VCalendar, {
  componentPrefix: "vc",
});

new Vue({
  router: router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
