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
      role: "customer",
    };
  },
  components: {
    RegisterForm,
    TheHeader,
  },
  methods: {
    registerUser(value) {
      const role = this.role;
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.pw)
        .then((credentials) => {
          const user = firebase.auth().currentUser;
          firebase
            .firestore()
            .collection("users")
            .doc(credentials.user.uid)
            .set({ name: value.email, roles: [role] })
            .then(() => {
              user.updateProfile({
                displayName: value.name,
              });
            })
            .then(() => {
              this.$router.push("/newDashboard");

              firebase
                .firestore()
                .collection("users")
                .doc(credentials.user.uid)
                .get()
                .then((querySnapshot) => {
                  if (querySnapshot.empty) {
                    console.error("ERROR");
                  }

                  this.$store.dispatch("loginUser", {
                    id: user.uid,
                    data: {
                      displayName: value.name,
                      email: user.email,
                      emailVerified: user.emailVerified,
                      role: querySnapshot.data().roles,
                    },
                  });
                })
                .catch((error) => {
                  this.$store.dispatch("setError", error);
                });
            });
        })
        .catch((err) => this.$store.dispatch("setError", err));
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
