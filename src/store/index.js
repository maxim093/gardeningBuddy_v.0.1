import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import bed from "./bed";
import error from "./error";
import user from "./user";

export default createStore({
  modules: { bed, error, user },
  plugins: [
    createPersistedState({
      paths: ["user", "error"],
    }),
  ],
});
