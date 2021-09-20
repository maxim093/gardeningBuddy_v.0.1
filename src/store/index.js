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
    // GET ALL BEDS FOR BEDTYPE
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
    // GET GOOD PLANT PARTNERS FOR CURRENT FIELD
    GET_GOODPARTNER: (state, payload) => {
      const { name } = payload;
      db.collection("plants")
        .where("goodPartner", "array-contains", name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
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
    getGoodPartner: (context, payload) => {
      context.commit("GET_GOODPARTNER", payload);
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
    // GET CURRENT USER
    GET_USER: (state) => {
      return state.user;
    },
    // GET BED BY ID
    GET_BED: (state) => (number) => {
      return state.normalRaisedBeds[number];
    },
    GET_PARTNER: (state) => (number, position) => {
      const bedRows = state.normalRaisedBeds[number];
      const curRow = bedRows[parseInt(position.row)];

      let goodPartner = {};
      let nextRow = {};
      let prevRow = {};

      // NO FOLLOWING ROW
      if (position.row > 3) {
        nextRow = null;
      } else {
        nextRow = bedRows[parseInt(position.row) + 1];
      }

      // NO PREVIOUS ROW
      if (position.row < 2) {
        prevRow = null;
      } else {
        prevRow = bedRows[parseInt(position.row) - 1];
      }

      if (nextRow === null) {
        goodPartner.atSouthWestElement = null;
        goodPartner.atWestElement = null;
        goodPartner.atNorthWestElement = null;
        goodPartner.atEastElement = prevRow[parseInt(position.col) - 1];

        if (position.col == 1) {
          goodPartner.atSouthElement = null;
          goodPartner.atSouthEastElement = null;
        } else {
          goodPartner.atSouthElement = curRow[parseInt(position.col) - 2];
          goodPartner.atSouthEastElement = prevRow[parseInt(position.col) - 2];
        }

        if (position.col == 6) {
          goodPartner.atNorthElement = null;
          goodPartner.atNorthEastElement = null;
        } else {
          goodPartner.atNorthElement = curRow[parseInt(position.col)];
          goodPartner.atNorthEastElement = prevRow[parseInt(position.col)];
        }
      } else if (prevRow === null) {
        goodPartner.atNorthEastElement = null;
        goodPartner.atEastElement = null;
        goodPartner.atSouthEastElement = null;
        goodPartner.atWestElement = nextRow[parseInt(position.col) - 1];

        if (position.col == 1) {
          goodPartner.atSouthElement = null;
          goodPartner.atSouthWestElement = null;
        } else {
          goodPartner.atSouthElement = curRow[parseInt(position.col) - 2];
          goodPartner.atSouthWestElement = nextRow[parseInt(position.col) - 2];
        }

        if (position.col == 6) {
          goodPartner.atNorthElement = null;
          goodPartner.atNorthWestElement = null;
        } else {
          goodPartner.atNorthElement = curRow[parseInt(position.col)];
          goodPartner.atNorthWestElement = nextRow[parseInt(position.col)];
        }
      } else {
        if (position.row <= 4 && position.row >= 1) {
          if (position.col <= 6 && position.col >= 1) {
            if (position.col == 1) {
              goodPartner.atSouthEastElement = null;
              goodPartner.atSouthElement = null;
              goodPartner.atSouthWestElement = null;
            } else {
              goodPartner.atSouthEastElement = prevRow[parseInt(position.col) - 2];
              goodPartner.atSouthElement = curRow[parseInt(position.col) - 2];
              goodPartner.atSouthWestElement = nextRow[parseInt(position.col) - 2];
            }

            if (position.col == 6) {
              goodPartner.atNorthElement = null;
              goodPartner.atNorthEastElement = null;
              goodPartner.atNorthWestElement = null;
            } else {
              goodPartner.atNorthElement = curRow[parseInt(position.col)];
              goodPartner.atNorthEastElement = prevRow[parseInt(position.col)];
              goodPartner.atNorthWestElement = nextRow[parseInt(position.col)];
            }
            goodPartner.atEastElement = prevRow[parseInt(position.col) - 1];
            goodPartner.atWestElement = nextRow[parseInt(position.col) - 1];
          }
        } else {
          console.error("Error getting Partner");
        }
      }
      return goodPartner;
    },
  },
  plugins: [createPersistedState()],
});
