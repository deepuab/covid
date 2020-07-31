import axios from 'axios';

export default {
    namespaced: true,
    state: {
        countryData: []
    },
    mutations: {
        updateCovidData(state, data) {
            console.log('Before', state.countryData.length)
            state.countryData = data;
            console.log('After', state.countryData.length)

        },
    },
    actions: {
        getCovidData({ commit }) {
            // Calling API and setting data in Vuex store using mutation function
            axios.get('/api/country_region')
                .then((results) => commit('updateCovidData', results.data.results))
                .catch(console.error);
        },

    },
};
