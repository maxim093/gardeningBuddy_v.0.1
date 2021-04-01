<template>
  <ShowcaseWrapper>
    <h3>Buttons:</h3>
    <Button class="Btn--green">Klick mich</Button>
    <Button class="Btn--pink">Klick mich</Button>
    <Button class="Btn--black">Klick mich</Button>
  </ShowcaseWrapper>

  <InputField />
  <Spinner />
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
