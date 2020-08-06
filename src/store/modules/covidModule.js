import axios from 'axios';

export default {
    namespaced: true,
    state: {
        indiaData: {},
        indiaStatistics: {
            active: 0,
            confirmed: 0,
            deceased: 0,
            recovered: 0
        },
        statesData: [],
        countryData: {}
    },
    mutations: {
        updateStateData(state, data) {
            state.statesData = data;
        },
        updateCountryData(state, data) {
            state.countryData = data;
        },
    },
    actions: {
        getCovidData({ commit }) {
            // Calling API and setting data in Vuex store using mutation function
            return axios.get('https://api.covid19india.org/state_district_wise.json')
                .then(results => {
                    const countryData = results.data;
                    const countryObject = {
                        stateCount: 0,
                        active: 0,
                        confirmed: 0,
                        deceased: 0,
                        recovered: 0
                    };
                    const states = Object.keys(countryData);
                    let statesData = [];
                    countryObject.stateCount = states.length;
                    states.forEach(state => {
                        let stateObject = {
                            name: '',
                            districtCount: 0,
                            active: 0,
                            confirmed: 0,
                            deceased: 0,
                            recovered: 0,
                            districtData: [],
                            stateCode: ''
                        };
                        stateObject.name = state;
                        stateObject.stateCode = countryData[state].statecode;
                        const districts = Object.keys(countryData[state]['districtData']);
                        stateObject.districtCount = districts.length;
                        districts.forEach(district => {
                            const districtData = countryData[state]['districtData'][district];
                            let districtObject = {};
                            districtObject.name = district;
                            districtObject = Object.assign(districtObject, districtData);
                            stateObject.districtData.push(districtObject);
                            stateObject.active += districtData.active;
                            stateObject.confirmed += districtData.confirmed;
                            stateObject.deceased += districtData.deceased;
                            stateObject.recovered += districtData.recovered;

                            countryObject.active += districtData.active;
                            countryObject.confirmed += districtData.confirmed;
                            countryObject.deceased += districtData.deceased;
                            countryObject.recovered += districtData.recovered;
                        });
                        statesData.push(stateObject);
                    });
                    commit('updateStateData', statesData);
                    commit('updateCountryData', countryObject);
                })
                .catch(console.error);
        },

    },
};
