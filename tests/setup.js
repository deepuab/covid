import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import numberFormatter from '../src/common/number-formatter';

Vue.use(BootstrapVue);
Vue.filter('number-formatter', numberFormatter);
