import axios from 'axios';

export default {
    namespaced: true,
    state: {
        indiaData: {}
    },
    mutations: {
        updateCovidData(state, data) {
            state.indiaData = data;
        },
    },
    actions: {
        getCovidData({ commit }) {
            // Calling API and setting data in Vuex store using mutation function
            axios.get('https://api.covid19india.org/state_district_wise.json')
                .then((results) => commit('updateCovidData', results.data))
                .catch(console.error);
        },

    },
};
