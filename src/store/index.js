import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { db } from "../main";

export default createStore({
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

    LOGIN_USER: (state, payload) => {
      state.user = payload;
    },
    LOGOUT_USER: (state) => {
      state.user = {};
    },
    // Get all the beds for a given bedtype
    GET_BEDS: (state, payload) => {
      const { bedType } = payload;

      db.collection("beds")
        .doc(state.user.id)
        .collection(bedType)
        .get()
        .then((querySnapshot) => {
          const currentDocLength = querySnapshot.docs;

          if (querySnapshot.empty) {
            console.log("NO BED");
          } else {
            querySnapshot.forEach((doc) => {
              // save bed data in state if there is no data or length doesnt match current state
              if (!state.normalRaisedBeds[doc.id] && Object.keys(state.normalRaisedBeds).length !== currentDocLength)
                state.normalRaisedBeds[doc.id] = doc.data();
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch("setError", error);
        });
    },
    SAVE_BED: (state, payload) => {
      const { updatedBed, bedType } = payload;
      db.collection("beds")
        .doc(state.user.id)
        .collection(bedType)
        .doc("2")
        .update(updatedBed)
        .then(() => {
          console.log("saved succesfully.");
          // TODO MAYBE save updated bed to global store
        })
        .catch((error) => {
          this.$store.dispatch("setError", error);
        });
    },
  },
  actions: {
    setError: (context, error) => {
      context.commit("SET_ERROR", error);
    },

    removeError: (context) => {
      context.commit("REMOVE_ERROR");
    },
    loginUser: (context, user) => {
      context.commit("LOGIN_USER", user);
    },

    logoutUser: (context) => {
      context.commit("LOGOUT_USER");
    },

    getBeds: (context, payload) => {
      context.commit("GET_BEDS", payload);
    },
    saveBed: (context, payload) => {
      context.commit("SAVE_BED", payload);
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
    // get the current user
    GET_USER: (state) => {
      return state.user;
    },
    // Get a specific bed for a user
    GET_BED: (state) => (number) => {
      return state.normalRaisedBeds[number];
    },
  },
  plugins: [createPersistedState()],
});
