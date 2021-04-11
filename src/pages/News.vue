<template>
  <Header />
  <div class="News">
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import NewsCard from "../components/molecules/NewsCard.vue";

export default {
  components: {
    Header,
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
