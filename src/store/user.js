const user = {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    LOGIN_USER: (state, payload) => {
      state.user = payload;
    },
    LOGOUT_USER: (state) => {
      state.user = {};
    },
  },
  actions: {
    loginUser: (context, user) => {
      context.commit("LOGIN_USER", user);
    },

    logoutUser: (context) => {
      context.commit("LOGOUT_USER");
    },
  },
  getters: {
    // GET CURRENT USER
    GET_USER: (state) => {
      return state.user;
    },
  },
};

export default user;
