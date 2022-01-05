// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueLoaders from "vue-loaders";
import VueTimers from "vue-timers";
import { ObserveVisibility } from "vue-observe-visibility";
import Clipboard from "v-clipboard";
import "vue-loaders/dist/vue-loaders.css";

import store from "./store";
import router from "./Routes";
import App from "./App";
import layoutMixin from "./mixins/layout";

Vue.use(BootstrapVue, {
  breakpoints: [`xs`, "sm", "md", "lg", "xl", "xxl"],
});
Vue.mixin(layoutMixin);
Vue.use(VueLoaders);
Vue.use(VueTimers);
Vue.use(Clipboard);

Vue.config.productionTip = false;

Vue.directive("observe-visibility", ObserveVisibility);

function setupFilters() {
  Vue.filter("tx", function(value) {
    if (!value) return "";
    return value.substr(0, 6) + "..." + value.substr(value.length - 6);
  });
}

setupFilters();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});

function addPlus(value, show) {
  return show && value > 0 ? "+" : "";
}
