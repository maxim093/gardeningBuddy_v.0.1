const error = {
  namespaced: true,
  state: {
    error: {},
    user: {},
    normalRaisedBeds: {},
  },
  mutations: {
    SET_ERROR: (state, payload) => {
      state.error = payload;
    },
    REMOVE_ERROR: (state) => {
      state.error = {};
    },
  },
  actions: {
    setError: (context, error) => {
      context.commit("SET_ERROR", error);
    },

    removeError: (context) => {
      context.commit("REMOVE_ERROR");
    },
  },
  getters: {
    GET_ERROR: (state) => {
      if (state.error.code === "auth/invalid-email") {
        return "Ungültige Email-Adresse, bitte überprüfe deine Eingabe.";
      } else if (state.error.code === "auth/wrong-password") {
        return "Die eingegebenen Daten stimmen nicht überein.";
      } else if (state.error.code === "auth/user-not-found") {
        return "Für diesen Nutzer scheint kein Konto zu existieren.";
      } else if (state.error.code === "permission-denied") {
        return "Keine Rechte für Zugriff.";
      } else {
        return state.error.message;
      }
    },
  },
};

export default error;
