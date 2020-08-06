import Vue from 'vue';
import Router from 'vue-router';

import DashBoardPage from '../dashboard/DashBoardPage.vue';
import DistrictDetailsPage from '../districtDetails1/DistrictDetailsPage.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.NODE_ENV === 'production'
    ? 'https://deepuab.github.io/covid/'
    : '/',
  routes: [{
    path: '/',
    name: 'Home',
    component: DashBoardPage,
  },
  {
    path: '/states/:stateCode',
    name: 'States',
    props: true,
    component: DistrictDetailsPage,
  },

  ],
});
