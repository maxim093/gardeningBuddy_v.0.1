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
    <swiper-slide @click="clicked(data.data.name)">
      <p>{{ data.data.name }}</p>
      <img :src="getPic(data.data.name)" v-bind:alt="pic" />
    </swiper-slide>
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
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    clicked(value) {
      this.$emit("clicked", value);
    },
    getPic(index) {
      if (!index) return;
      try {
        return require("@/assets/test/" + index.toLowerCase() + ".png");
      } catch (error) {
        return require("@/assets/test/placeholder.jpg");
      }
    },
  },
  updated() {
    console.log(this.data);
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
