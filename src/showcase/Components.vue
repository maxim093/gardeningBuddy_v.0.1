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

  <ShowcaseWrapper>
    <h3>Image</h3>
    <Image
      variant="circular--landscape"
      :src="require('@/assets/basilikum.jpg')"
    />
    <Image
      variant="circular--portrait"
      :src="require('@/assets/rosmarin.jpg')"
    />
    <Image variant="circular--portrait" :src="require('@/assets/tomate.jpg')" />
    <Image :src="require('@/assets/tomate.jpg')" size="Image--small" />
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <h3>Icon</h3>
    <Icon name="heart" size="large" />
    <Icon name="sunny-outline" size="small" color="Icon--pink" />
    <Icon name="rainy-outline" size="large" />
  </ShowcaseWrapper>
</template>

<script>
import Button from "../components/atoms/Button";
import InputField from "../components/atoms/InputField";
import Spinner from "../components/atoms/Spinner";
import Image from "../components/atoms/Image";
import Icon from "../components/atoms/Icon";
import ShowcaseWrapper from "./ShowcaseWrapper";

export default {
  components: {
    Button,
    InputField,
    Spinner,
    Image,
    ShowcaseWrapper,
    Icon,
  },
};
</script>
