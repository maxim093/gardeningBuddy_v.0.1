<template>
  <div class="Login">
    <h1 class="Login__heading">Anmelden</h1>

    <p class="Login__mailHeading">Mit Email-Adresse anmelden</p>
    <form @submit.prevent="login" class="Login__form">
      <base-input-field label="E-mail Adresse" type="email" v-model="user.email"></base-input-field>
      <base-input-field label="Passwort" type="password" v-model="user.password"></base-input-field>
      <base-button class="Btn--green">Anmelden</base-button>
    </form>

    <p class="Login__subHeading">Hier kannst du dich einfach mit deinem Facebook oder Google Account einloggen.</p>
    <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script>
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import BaseInputField from "../components/atoms/BaseInputField.vue";
import BaseButton from "../components/atoms/BaseButton.vue";

export default {
  components: { BaseInputField, BaseButton },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
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
        { provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID, fullLabel: "Mit Facebook anmelden" },
        { provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID, fullLabel: "Mit Google anmelden" },
      ],
      // Terms of service url.
      tosUrl: "<your-tos-url>",
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
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user.uid);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
  },
};
</script>

<style lang="scss">
.Login {
  .Btn {
    display: flex;
  }

  &__heading {
    text-align: left;
  }

  &__subHeading {
    margin-top: 50px;
  }

  &__mailHeading {
    text-align: left;
  }
}
</style>
