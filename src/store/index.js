import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    results: [],
    showLoading: false
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
    },
    storeShowLoading(state, value) {
      state.showLoading = value;
    }
  },
  actions: {
    getDirections({ commit }, jsonBody) {
      axios
        .post("http://localhost:8383/getDirections", jsonBody)
        .then(response => {
          console.log(response);
          commit("storeResult", response.data);
          commit("storeShowLoading", false);
        })
        .catch(error => {
          console.error("There was an error!", error);
          commit("storeShowLoading", false);
        });
    }
  },
  modules: {},
  getters: {
    getShowLoading: state => state.showLoading
  }
});
