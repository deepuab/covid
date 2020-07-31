import Vue from 'vue';
import Vuex from 'vuex';

import covidModule from './modules/covidModule';

Vue.use(Vuex);

export default new Vuex.Store({
    // root state
    state: {

    },
    modules: {
        covid: covidModule,
    },
});
