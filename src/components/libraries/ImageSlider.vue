<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :autoplay="true"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="ImageSlider-background--1">
      <div class="ImageSlider-textWrapper">
        <span class="ImageSlider-category">Kochen</span>
        <base-headline class="ImageSlider-title light" styling="h1">Leckere Rezepte zum Einkochen</base-headline>
        <base-icon size="large" color="Icon--white" name="arrow-forward-outline"></base-icon>
      </div>
    </swiper-slide>
    <swiper-slide class="ImageSlider-background--2">
      <div class="ImageSlider-textWrapper">
        <span class="ImageSlider-category">Gemüsebeet</span>
        <base-headline class="ImageSlider-title light" styling="h1">Zeit zum Ernten</base-headline>
        <base-icon size="large" color="Icon--white" name="arrow-forward-outline"></base-icon>
      </div>
    </swiper-slide>
    <swiper-slide class="ImageSlider-background--3">
      <div class="ImageSlider-textWrapper">
        <span class="ImageSlider-category">Lifestyle</span>
        <base-headline class="ImageSlider-title light" styling="h1">Fit und Heahlty</base-headline>
        <base-icon size="large" color="Icon--white" name="arrow-forward-outline"></base-icon>
      </div>
    </swiper-slide>
    <swiper-slide class="ImageSlider-background--4">
      <div class="ImageSlider-textWrapper">
        <span class="ImageSlider-category">DIY</span>
        <base-headline class="ImageSlider-title light" styling="h1">Kräuterbeet selber bauen</base-headline>
        <base-icon size="large" color="Icon--white" name="arrow-forward-outline"></base-icon>
      </div>
    </swiper-slide>
    <swiper-slide class="ImageSlider-background--5">
      <div class="ImageSlider-textWrapper">
        <span class="ImageSlider-category">Kräuter</span>
        <base-headline class="ImageSlider-title light" styling="h1">Kräuter in der Küche</base-headline>
        <base-icon size="large" color="Icon--white" name="arrow-forward-outline"></base-icon>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
//import BaseImage from "../atoms/BaseImage.vue";
import BaseHeadline from "../atoms/BaseHeadline.vue";
import BaseIcon from "../atoms/BaseIcon.vue";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    //  BaseImage,
    BaseHeadline,
    BaseIcon,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss" >
.swiper-slide {
  position: relative;
}

.ImageSlider {
  &-background {
    &--1 {
      background-image: url("../../assets/ImagesGardening/einkochen.jpg");
      background-size: 600px;
      background-repeat: no-repeat;
      background-position: center;
    }

    &--2 {
      background-image: url("../../assets/ImagesGardening/radiesschen.jpg");
      background-size: 600px;
      background-repeat: no-repeat;
      background-position: top left;
    }
    &--3 {
      background-image: url("../../assets/ImagesGardening/kräuterFrau.jpg");
      background-size: 600px;
      background-repeat: no-repeat;
      background-position: center left;
    }
    &--4 {
      background-image: url("../../assets/ImagesGardening/töpfe.jpg");
      background-size: 600px;
      background-repeat: no-repeat;
      background-position: top left;
    }
    &--5 {
      background-image: url("../../assets/ImagesGardening/verschiedeneKräuter.jpg");
      background-size: 800px;
      background-position: bottom;
      background-repeat: no-repeat;
    }
  }
  &-textWrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    .ImageSlider-category,
    .ImageSlider-title {
      text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
      // rgba(255,255,255,0.6);
    }

    .ImageSlider-category {
      font-weight: 200;
      font-size: 18px;
      line-height: 1.4;
      background-color: rgba(45, 53, 72, 0.6);
      padding: 5px 5px;
      color: rgba(255, 255, 255, 0.9);
    }

    .ImageSlider-title {
      text-align: left;
      // word-spacing: 100vw;
      margin-top: 15px;
      background-color: rgba(45, 53, 72, 0.6);
      padding: 5px 10px;
      color: rgba(255, 255, 255, 0.9);

      &.light {
        color: rgba(255, 255, 255, 0.9);
      }
    }

    .Icon {
      bottom: 5%;
      position: fixed;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
      padding: 5px 10px;
      background-color: palevioletred;
      border-radius: 8px;
    }
  }
}
</style>
