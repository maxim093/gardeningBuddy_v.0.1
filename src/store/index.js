import { createStore } from "vuex";

export default createStore({
  state: {
    error: "",
  },
  mutations: {
    SET_ERROR: (state, payload) => {
      state.error = payload;
    },
    REMOVE_ERROR: (state) => {
      state.error = "";
    },
  },
  actions: {
    setError: (context, errorMsg) => {
      context.commit("SET_ERROR", errorMsg);
    },

    removeError: (context) => {
      context.commit("REMOVE_ERROR");
    },
  },
  getters: {
    GET_ERROR: (state) => {
      return state.error;
    },
  },
});
