<template>
  <div class="about">
    <Components />
    <special-text />
    <weather-widget />
  </div>
</template>

<script>
import WeatherWidget from "../components/molecules/WeatherWidget";
import SpecialText from "../components/molecules/SpecialText";
import Components from "../showcase/Components";

export default {
  components: {
    WeatherWidget,
    SpecialText,
    Components,
  },
};
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
