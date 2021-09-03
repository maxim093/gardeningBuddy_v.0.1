<template>
  <form @submit.prevent="onSubmit" class="ClassicForm">
    <base-headline tag="h1" styling="h2">
      <slot name="header"></slot>
    </base-headline>
    <base-input-field label="Email" variant="Input--pink" type="text" @input="getEmail"></base-input-field>
    <base-input-field label="Anzeigename" variant="Input--pink" type="text" @input="getName"></base-input-field>
    <base-input-field label="Passwort" variant="Input--pink" type="password" @input="getPW"></base-input-field>
    <base-button class="Btn--green">Registrieren</base-button>
  </form>
</template>
<script>
import BaseInputField from "../atoms/BaseInputField";
import BaseButton from "../atoms/BaseButton";
import BaseHeadline from "../atoms/BaseHeadline";
export default {
  name: "ClassicForm",
  components: {
    BaseInputField,
    BaseButton,
    BaseHeadline,
  },
  emits: ["submit"],
  data() {
    return {
      user: {
        email: "",
        pw: "",
      },
      inputValue: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.user);
    },
    getEmail(e) {
      this.user.email = e.target.value;
    },
    getName(e) {
      this.user.name = e.target.value;
    },
    getPW(e) {
      this.user.pw = e.target.value;
    },
  },
};
</script>

<style lang="scss">
.ClassicForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 500px;
  margin: 100px auto;
  padding: 50px 0;
  z-index: 4;
  position: relative;
  background: #fff;

  & .Input-Wrapper {
    margin: 20px 0;

    & .Input {
      width: 400px;
      font-size: 18px;
      line-height: 45px;
      height: 45px;
      font-family: $font-MS;
    }

    & .Input[type="password"] {
      font-size: 22px;
    }

    & .Label {
      font-size: 18px;
      top: inherit;
      font-family: $font-MS;
      font-weight: 400;
    }
  }

  .Btn {
    margin-top: 20px;
  }

  h1 > span {
    color: #76c893;
  }
}
</style>
