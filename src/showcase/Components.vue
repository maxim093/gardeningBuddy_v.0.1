<template>
  <ShowcaseWrapper>
    <h3>Button</h3>
    <Button href="https://www.google.de/" class="Btn--green">Klick mich</Button>
    <Button class="Btn--pink">Klick mich</Button>
    <Button class="Btn--white">Klick mich</Button>
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <h3>InputField</h3>
    <InputField variant="Input--pink">Name</InputField>
    <InputField variant="Input--green" type="email">Email</InputField>
    <InputField variant="Input--black" type="password">Password</InputField>
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <h3>Spinner</h3>
    <Spinner class="loader" />
    <Spinner class="loader2" />
    <Spinner class="loader3" />
    <Spinner class="loader4" />
    <Spinner class="loader5" />
  </ShowcaseWrapper>
</template>

<script>
import Button from "../components/atoms/Button";
import InputField from "../components/atoms/InputField";
import Spinner from "../components/atoms/Spinner";
import ShowcaseWrapper from "./ShowcaseWrapper";

export default {
  components: {
    Button,
    InputField,
    Spinner,
    ShowcaseWrapper,
  },
};
</script>
