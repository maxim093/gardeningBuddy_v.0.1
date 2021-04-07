<template>
  <div class="about">
    <Weather />
    <SpecialText />
  </div>
</template>

<script>
import Weather from "../components/molecules/Weather";
import SpecialText from "../components/molecules/SpecialText";

export default {
  components: {
    Weather,
    SpecialText,
  },
};
</script>
