<template>
  <div class="about">
    <Components />
    <SpecialText />
    <Weather />
  </div>
</template>

<script>
import Weather from "../components/molecules/Weather";
import SpecialText from "../components/molecules/SpecialText";
import Components from "../showcase/Components";

export default {
  components: {
    Weather,
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
