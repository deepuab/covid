import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue'

import store from './store';
import router from './router';

import numberFormatter from './common/number-formatter';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

// Making filters available globally
Vue.filter('number-formatter', numberFormatter);

new Vue({
  render: h => h(App),
  store,
  router

}).$mount('#app')
