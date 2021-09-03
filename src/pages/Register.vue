<template>
  <the-header />
  <div class="Register">
    <register-form @submit="registerUser">
      <template v-slot:header>
        Jetzt nur noch schnell <span>Registrieren</span><br />
        und dann kanns losgehen! 😍
      </template>
    </register-form>
    <img :src="Background" alt="" class="Register-background" />
  </div>
</template>

<script>
import RegisterForm from "../components/molecules/RegisterForm";
import Background from "../assets/blob1.svg";
import TheHeader from "../components/layout/TheHeader.vue";
import firebase from "firebase";

export default {
  data() {
    return {
      Background,
    };
  },
  components: {
    RegisterForm,
    TheHeader,
  },
  methods: {
    registerUser(value) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.pw)
        .then(() => {
          const user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: value.name,
          });
          this.$router.push("/Dashboard");
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style lang="scss" scoped>
.Register {
  position: relative;

  &-background {
    top: -250px;
    left: 280px;
    position: absolute;
    z-index: 1;
    width: 1000px;
  }
}
</style>
