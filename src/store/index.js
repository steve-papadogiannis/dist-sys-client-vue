import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    results: [],
    showLoading: false,
    items: []
  };
};

const HOST_NAME = process.env.VUE_APP_HOST_NAME;
const PORT = process.env.VUE_APP_PORT;

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
    },
    storeInfoAreaItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    getDirections({ commit }, jsonBody) {
      commit("storeInfoAreaItems", [
        {
          message: `Get Directions was invoked for ${JSON.stringify(jsonBody)}`,
          type: "info"
        }
      ]);
      axios
        .post(`http://${HOST_NAME}:${PORT}/getDirections`, jsonBody)
        .then(response => {
          console.log(response);
          commit("storeResult", response.data);
          commit("storeShowLoading", false);
          commit("storeInfoAreaItems", [
            {
              message: `Response received for ${
                response.config.url
              }: ${JSON.stringify(response.data)}`,
              type: "info"
            },
            {
              message: "Rendering...",
              type: "info"
            }
          ]);
        })
        .catch(error => {
          console.error("There was an error!", error);
          commit("storeInfoAreaItems", [
            {
              message: error.message,
              type: "error"
            }
          ]);
          commit("storeShowLoading", false);
        });
    }
  },
  modules: {},
  getters: {
    getShowLoading: state => state.showLoading,
    getInfoAreaItems: state => state.items
  }
});
