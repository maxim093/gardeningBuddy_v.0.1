import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxRB_sONK323LZZS3qypEDkkwdGQEtKUY",
  authDomain: "gardenbuddy-91f3a.firebaseapp.com",
  projectId: "gardenbuddy-91f3a",
  storageBucket: "gardenbuddy-91f3a.appspot.com",
  messagingSenderId: "720457248606",
  appId: "1:720457248606:web:990178777a419b17f9a9cf",
  measurementId: "G-YNPLKLJJ9P",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
