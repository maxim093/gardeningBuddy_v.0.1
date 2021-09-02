<template>
  <h1>Registrieren/Login</h1>
  <p>Hier kannst du dich einfach mit deinem Facebook oder Google Account registrieren und einloggen</p>
  <p>Oder wähle den Weg über die Registration bzw. den Login über deine Email Adresse</p>
  <section id="firebaseui-auth-container"></section>
  <a @click="signoutButtonPressed">Logout</a>
</template>

<script>
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    // instantiate firebase Auth UI object only if it doesnt already exist
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    var uiConfig = {
      // TODO: if user has no raised Bed then go to getStarted
      // else go to the Dashboard
      signInSuccessUrl: "/GetStarted",
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
      ],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  methods: {
    signOut(e) {
      e.stopPropagation();
      firebase.auth().signOut();
      this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>

<style></style>
