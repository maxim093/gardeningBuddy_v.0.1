<template>
  <the-header />
  <div class="News">
    <news-card />
    <news-card />
    <news-card />
    <news-card />
    <news-card />
    <news-card />
    <news-card />
  </div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
import NewsCard from "../components/molecules/NewsCard.vue";

export default {
  components: {
    TheHeader,
    NewsCard,
  },
};
</script>

<style lang="scss" scoped>
.News {
  padding: 100px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  background-image: url("../assets/wave5.svg");
  background-repeat: no-repeat;
  background-position: bottom right;
}
</style>
