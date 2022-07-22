// import { createStore } from 'vuex'
// import axios from 'axios'

// export default Vuex.Store({
//   state: {
//     api_key: '7a28f9c1f07248dda1d103809222007',
//     url_base: 'http://api.weatherapi.com/v1/forecast.json',
//     q: '',
//     days: '',
//     aqi: '',
//     alerts: '',
//   },
//   actions: {
//     async setForecasts({ commit }) {
//       const data = await axios.get(
//         `${this.state.url_base}?key=${this.state.api_key}&q=${this.state.q}&days=${this.state.days}&aqi=${this.state.aqi}&alerts=${this.state.alerts}`
//       )
//       console.log('data', data)
//       commit('SET_FORECAST', data)
//     },
//   },

//   mutations: {
//     SET_FORECAST(state, value) {
//       state.forecast = value
//     },
//   },
// })
