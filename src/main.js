import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
new Vue({
  router: router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
