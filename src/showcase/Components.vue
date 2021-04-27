<template>
  <ShowcaseWrapper>
    <base-headline styling="h2">Button</base-headline>
    <base-button href="https://www.google.de/" class="Btn--green">Klick mich</base-button>
    <base-button class="Btn--pink">Klick mich</base-button>
    <base-button class="Btn--white">Klick mich</base-button>
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <base-headline styling="h2">InputField</base-headline>
    <base-input-field variant="Input--pink">Name</base-input-field>
    <base-input-field variant="Input--green" type="email">Email</base-input-field>
    <base-input-field variant="Input--black" type="password">Password</base-input-field>
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <base-headline styling="h2">Spinner</base-headline>
    <base-spinner class="loader" />
    <base-spinner class="loader2" />
    <base-spinner class="loader3" />
    <base-spinner class="loader4" />
    <base-spinner class="loader5" />
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <base-headline styling="h2">Image</base-headline>
    <base-image variant="circular--landscape" :src="require('@/assets/basilikum.jpg')" />
    <base-image variant="circular--portrait" :src="require('@/assets/rosmarin.jpg')" />
    <base-image variant="circular--portrait" :src="require('@/assets/tomate.jpg')" />
    <base-image :src="require('@/assets/tomate.jpg')" size="Image--small" />
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <base-headline styling="h2">Icon</base-headline>
    <base-icon name="heart" size="large" />
    <base-icon name="sunny-outline" size="small" color="Icon--pink" />
    <base-icon name="rainy-outline" size="large" />
  </ShowcaseWrapper>

  <ShowcaseWrapper>
    <base-headline tag="h1">Headline h1</base-headline>
    <base-headline styling="h2">Headline h2</base-headline>
    <base-headline styling="h3">Headline h3</base-headline>
    <base-headline styling="h4">Headline h4</base-headline>
    <base-headline tag="h1" styling="h4">Headline h5</base-headline>
    <base-headline>Headline h6</base-headline>
  </ShowcaseWrapper>

  <ShowcaseWrapper class="spacer">
    <base-headline styling="h2">Logo</base-headline>
    <base-logo />
  </ShowcaseWrapper>

  <ShowcaseWrapper class="spacer">
    <tabs-wrapper>
      <Tab title="Tab 1">afafafaf</Tab>
      <Tab title="Tab 2">Hfafafafafafaf</Tab>
      <Tab title="Tab 3">Hellafafafafafafafafafafaf3</Tab>
      <Tab title="Tab 4">Hafafafafa</Tab>
    </tabs-wrapper>
  </ShowcaseWrapper>
</template>

<script>
import BaseButton from "../components/atoms/BaseButton";
import BaseInputField from "../components/atoms/BaseInputField";
import BaseSpinner from "../components/atoms/BaseSpinner";
import BaseImage from "../components/atoms/BaseImage";
import BaseIcon from "../components/atoms/BaseIcon";
import ShowcaseWrapper from "./ShowcaseWrapper";
import BaseLogo from "../components/atoms/BaseLogo";
import BaseHeadline from "../components/atoms/BaseHeadline";
import TabsWrapper from "../components/molecules/TabsWrapper";
import Tab from "../components/molecules/Tab";

export default {
  components: {
    BaseButton,
    BaseInputField,
    BaseSpinner,
    BaseImage,
    ShowcaseWrapper,
    BaseIcon,
    BaseHeadline,
    BaseLogo,
    TabsWrapper,
    Tab,
  },
};
</script>
