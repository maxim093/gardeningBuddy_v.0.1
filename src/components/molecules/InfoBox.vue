<template>
  <div class="InfoBox">
    <h2>{{ plantData.data.name }}</h2>
    <div>
      <base-icon name="water-outline" size="large"></base-icon>
      <base-icon name="water" size="large"></base-icon>

      <p>{{ plantData.data.watering }}</p>
    </div>

    <div>
      <base-icon name="happy-outline" size="large"></base-icon>
      <base-icon name="happy" size="large"></base-icon>

      <p>{{ plantData.data.goodPartner }}</p>
    </div>

    <div>
      <base-icon name="sad-outline" size="large"></base-icon>
      <base-icon name="sad" size="large"></base-icon>

      <p>{{ plantData.data.badPartner }}</p>
    </div>

    <div>
      <base-icon name="warning-outline" size="large"></base-icon>
      <base-icon name="warning" size="large"></base-icon>

      <p>{{ plantData.data.warning }}</p>
    </div>

    <div>
      <base-icon name="earth-outline" size="large"></base-icon>
      <base-icon name="earth" size="large"></base-icon>

      <p>{{ plantData.data.general }}</p>
    </div>

    <div>
      <base-icon name="book-outline" size="large"></base-icon>
      <base-icon name="book" size="large"></base-icon>

      <p>{{ plantData.data.facts }}</p>
    </div>

    <div>
      <base-icon name="heart-circle" size="large"></base-icon>
      <base-icon name="heart" size="large"></base-icon>

      <p>{{ plantData.data.healthBenefits }}</p>
    </div>
  </div>
</template>

<script>
import BaseIcon from "../atoms/BaseIcon.vue";

export default {
  props: ["plantData"],
  components: {
    BaseIcon,
  },
  mounted() {
    console.log(this.plantData);
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.InfoBox {
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  height: 80vh;
  // width: 40vw;

  width: 800px;
  margin-left: auto;
  position: relative;
  z-index: 5000;
  margin-right: 80px;
  border-radius: 15px;
  background: #fff;
}
</style>
