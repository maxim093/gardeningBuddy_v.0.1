<template>
  <div class="ClassicForm">
    <Headline tag="h1" styling="h2"
      >Jetzt nur noch schnell <span>Registrieren</span><br />
      und dann kanns losgehen! 😍
    </Headline>
    <InputField variant="Input--pink" type="email">Email</InputField>
    <InputField variant="Input--pink" type="password">Password</InputField>
    <InputField variant="Input--pink" type="password">Password</InputField>
    <Button class="Btn--green">Registrieren</Button>
  </div>
</template>
<script>
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";
import Headline from "../atoms/Headline";
export default {
  components: {
    InputField,
    Button,
    Headline,
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
  z-index: 10;
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
