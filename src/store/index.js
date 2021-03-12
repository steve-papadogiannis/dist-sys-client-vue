import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    storeResult(state, results) {
      state.results = results;
    }
  },
  actions: {
    getDirections({ commit }, jsonBody) {
      axios
        .post("http://localhost:8383/getDirections", jsonBody)
        .then(response => {
          console.log(response);
          commit("storeResult", response.data);
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    }
  },
  modules: {}
});
