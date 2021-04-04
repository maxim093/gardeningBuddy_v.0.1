<template>
  <ShowcaseWrapper>
    <Headline styling="h2">Button</Headline>
    <Button href="https://www.google.de/" class="Btn--green">Klick mich</Button>
    <Button class="Btn--pink">Klick mich</Button>
    <Button class="Btn--white">Klick mich</Button>
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <Headline styling="h2">InputField</Headline>
    <InputField variant="Input--pink">Name</InputField>
    <InputField variant="Input--green" type="email">Email</InputField>
    <InputField variant="Input--black" type="password">Password</InputField>
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <Headline styling="h2">Spinner</Headline>
    <Spinner class="loader" />
    <Spinner class="loader2" />
    <Spinner class="loader3" />
    <Spinner class="loader4" />
    <Spinner class="loader5" />
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <Headline styling="h2">Image</Headline>
    <Image variant="circular--landscape" :src="require('@/assets/basilikum.jpg')" />
    <Image variant="circular--portrait" :src="require('@/assets/rosmarin.jpg')" />
    <Image variant="circular--portrait" :src="require('@/assets/tomate.jpg')" />
    <Image :src="require('@/assets/tomate.jpg')" size="Image--small" />
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <Headline styling="h2">Icon</Headline>
    <Icon name="heart" size="large" />
    <Icon name="sunny-outline" size="small" color="Icon--pink" />
    <Icon name="rainy-outline" size="large" />
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <Headline tag="h1">Headline h1</Headline>
    <Headline styling="h2">Headline h2</Headline>
    <Headline styling="h3">Headline h3</Headline>
    <Headline styling="h4">Headline h4</Headline>
    <Headline tag="h1" styling="h4">Headline h5</Headline>
    <Headline>Headline h6</Headline>
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <Headline styling="h2">Logo</Headline>
    <Logo />
  </ShowcaseWrapper>
</template>

<script>
import Button from "../components/atoms/Button";
import InputField from "../components/atoms/InputField";
import Spinner from "../components/atoms/Spinner";
import Image from "../components/atoms/Image";
import Icon from "../components/atoms/Icon";
import ShowcaseWrapper from "./ShowcaseWrapper";
import Logo from "../components/atoms/Logo";
import Headline from "../components/atoms/Headline";

export default {
  components: {
    Button,
    InputField,
    Spinner,
    Image,
    ShowcaseWrapper,
    Icon,
    Headline,
    Logo,
  },
};
</script>
