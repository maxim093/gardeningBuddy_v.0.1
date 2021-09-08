<template>
  <swiper
    :grabCursor="true"
    :slidesPerView="5"
    :spaceBetween="20"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper"
  >
    <swiper-slide @click="clicked('Gurke')">
      <p>Gurke</p>
      <img src="../../assets/test/gurke.png" alt=""
    /></swiper-slide>
    <swiper-slide @click="clicked('Tomate')">
      <p>Tomate</p>
      <img src="../../assets/test/tomate.png" alt=""
    /></swiper-slide>
    <swiper-slide @click="clicked('Paprika')">
      <p>Paprika</p>
      <img src="../../assets/test/paprika.png" alt=""
    /></swiper-slide>
    <swiper-slide @click="clicked('Kartoffel')">
      <p>Kartoffel</p>
      <img src="../../assets/test/kartoffel.png" alt=""
    /></swiper-slide>
    <swiper-slide @click="clicked('Erdbeere')">
      <p>Erdbeere</p>
      <img src="../../assets/test/erdbeere.png" alt=""
    /></swiper-slide>
    <swiper-slide @click="clicked('Gurke')">
      <p>Gurke</p>
      <img src="../../assets/test/gurke.png" alt=""
    /></swiper-slide>
    <swiper-slide @click="clicked('Tomate')"
      ><p>Tomate</p>
      <img src="../../assets/test/tomate.png" alt=""
    /></swiper-slide>
    <swiper-slide @click="clicked('Blumenkohl')">
      <p>Blumenkohl</p>
      <img src="../../assets/test/placeholder.jpg" alt=""
    /></swiper-slide>
    <swiper-slide @click="clicked('Zucchini')">
      <p>Zucchini</p>
      <img src="../../assets/test/placeholder.jpg" alt=""
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {
    clicked(value) {
      this.$emit("clicked", value);
    },
  },
};
</script>

<style lang="scss">
.mySwiper {
  height: 200px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 80px;
    width: 80px;
    cursor: pointer;
  }
}
</style>
