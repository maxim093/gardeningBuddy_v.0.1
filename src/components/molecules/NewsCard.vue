<template>
  <div class="NewsCard">
    <div class="NewsCard-background">
      <span class="NewsCard-background-tag">Hochbeet</span>
    </div>
    <div class="NewsCard-body">
      <p class="NewsCard-body-title">Mehr Ertag im Hochbeet</p>
      <p class="NewsCard-body-desc">Einfache Tricks zur Verbesserung des Ertrags im heimischen Hochbeet</p>
      <p></p>
    </div>
  </div>
</template>
dominik
<script>
export default {
  name: "NewsCard",
};
</script>

<style lang="scss" scoped>
.NewsCard {
  background: white;
  border-radius: 8px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  text-align: left;
  transition: all 0.3s ease-out;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }

  &-background {
    height: 250px;
    background-size: cover;
    background-position: center;
    border-radius: 8px 8px 0 0;
    position: relative;
    background-image: url("../../assets/plantsBackground.svg");

    &-tag {
      background: #dd2020;
      position: absolute;
      bottom: 10px;
      left: 20px;
      padding: 3px 8px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      font-family: $font-WS;
    }
  }

  &-body {
    padding: 20px;

    &-title {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    &-desc {
      margin-bottom: 20px;
      font-size: 15px;
      color: #858484;
      line-height: 1.6;
    }
  }
}
</style>
