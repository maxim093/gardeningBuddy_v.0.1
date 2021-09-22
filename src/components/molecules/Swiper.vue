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
    <swiper-slide
      v-for="recommendation in recommendations"
      :key="recommendation.data.name"
      @click="clicked(recommendation.data.name)"
    >
      <p>{{ recommendation.data.name }}</p>
      <img :src="getImgUrl(recommendation.data.name)" alt=""
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
    return {
      recommendations: [],
    };
  },
  methods: {
    clicked(value) {
      this.$emit("clicked", value);
    },
    getImgUrl(img) {
      try {
        return require("@/assets/test/" + img + ".png");
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    "$store.state.bed.goodPartner": {
      deep: true,
      handler(newVal) {
        this.recommendations = newVal;
      },
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
