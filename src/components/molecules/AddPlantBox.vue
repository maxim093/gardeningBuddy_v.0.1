<template>
  <div class="AddPlantBox">
    <h1>Lass uns pflanzen</h1>

    <h2>Unsere Vorschläge</h2>
    <image-slider class="Swiper2"></image-slider>

    <base-input-field></base-input-field>
  </div>
</template>

<script>
import BaseInputField from "../atoms/BaseInputField.vue";
import ImageSlider from "../../components/libraries/ImageSlider";

export default {
  components: { BaseInputField, ImageSlider },
};
</script>

<style lang="scss">
.AddPlantBox {
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
  margin-top: 30px;
  padding: 30px;
  text-align: left;
}

.Swiper2 {
  height: 300px;
  width: 300px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  cursor: grab;
}
</style>
