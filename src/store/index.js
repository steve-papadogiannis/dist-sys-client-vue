import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    results: []
  };
};

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    storeResult(state, results) {
      state.results = results;
    },
    resetState(state) {
      // Merge rather than replace so we don't lose observers
      // https://github.com/vuejs/vuex/issues/1118
      Object.assign(state, getDefaultState());
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
