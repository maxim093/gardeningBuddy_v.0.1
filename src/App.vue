<template>
  <router-view />
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      data: "",
    };
  },
  watch: {
    $route() {
      this.checkUser();
    },
  },
  methods: {
    checkUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (
          this.$route.path !== "/News" &&
          this.$route.path !== "/Register" &&
          this.$route.path !== "/CreatePlant" &&
          this.$route.path !== "/RaisedBed" &&
          this.$route.path !== "/GetStarted"
        ) {
          if (!user) {
            this.$router.push("/Landingpage");
          } else {
            this.$router.push("/Dashboard");
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: $font-WS, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
