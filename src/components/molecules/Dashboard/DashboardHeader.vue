<template>
  <div class="Dashboard-Header">
    <base-headline tag="h1">Hallo {{ user.name }},</base-headline>
    <base-headline styling="h2"> was steht heute auf dem Plan? 😊</base-headline>
  </div>
</template>

<script>
import BaseHeadline from "../../atoms/BaseHeadline";

export default {
  data() {
    return {
      user: {
        id: 1,
        name: "Tobias",
        profilePicture: "",
      },
    };
  },
  components: {
    BaseHeadline,
  },
};
</script>

<style lang="scss" scoped>
.Dashboard-Header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  h1,
  h2 {
    margin: 0;
  }
  h2 {
    margin-top: -10px;
  }
}
</style>
