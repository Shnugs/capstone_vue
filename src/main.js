import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios";
import Vue2Filters from "vue2-filters";
import Highcharts from 'highcharts';
import loadData from 'highcharts/modules/data';
import loadDrilldown from 'highcharts/modules/drilldown.js';
import loadExporting from 'highcharts/modules/data';
import HighchartsVue from 'highcharts-vue';
import VeeValidate from 'vee-validate';


loadData(Highcharts);
loadDrilldown(Highcharts);
loadExporting(Highcharts);
Vue.use(HighchartsVue);

Vue.use(VeeValidate);

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
