<template>
  <div class="ClassicForm">
    <base-headline tag="h1" styling="h2">
      <slot name="header"></slot>
    </base-headline>
    <base-input-field variant="Input--pink" type="email">Email</base-input-field>
    <base-input-field variant="Input--pink" type="password">Passwort</base-input-field>
    <base-input-field variant="Input--pink" type="password">Passwort wiederholen</base-input-field>
    <base-button class="Btn--green">Registrieren</base-button>
  </div>
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
};
</script>

<style lang="scss">
.ClassicForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 30%;
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
