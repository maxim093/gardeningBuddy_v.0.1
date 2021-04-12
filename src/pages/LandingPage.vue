<template>
  <Header />
  <div class="LandingPage">
    <img :src="blob" alt="" class="LandingPage-blob" />
    <img :src="womenGarden" alt="" class="LandingPage-background" />
    <div class="LandingPage-Info">
      <div>
        <Headline tag="h1" class="LandingPage-Info-headline">Kein Bock auf Tagebuch?</Headline>
        <div class="LandingPage-Info-subline">
          <Headline tag="h2">Mit dem Gardenbuddy alles online manangen!</Headline>
          <Headline tag="h2">Super easy und super schnell!</Headline>
          <Button class="Btn--green">Jetzt starten</Button>
        </div>
      </div>
    </div>
  </div>
  <div class="Footer">
    <a href="https://www.freepik.com/vectors/woman">Woman vector created by freepik - www.freepik.com</a>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import wave from "../assets/wave1.svg";
import blob from "../assets/blob10.svg";
import womenGarden from "../assets/womenGardening.svg";
import Headline from "../components/atoms/Headline";
import Button from "../components/atoms/Button";

export default {
  data() {
    return {
      wave,
      blob,
      womenGarden,
    };
  },
  components: {
    Header,
    Headline,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.LandingPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-image: url("../assets/wave8.svg");
  background-repeat: no-repeat;
  height: 100vh;
  background-position: bottom;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    background-image: url("../assets/wave8.svg");
    background-repeat: no-repeat;
    width: 1900px;
    height: 100%;
    position: absolute;
    right: -650px;
    top: -1000px;
    transform: rotateZ(220deg);
    z-index: 3;
  }

  &-background {
    position: absolute;
    width: 650px;
    left: 70px;
    top: 0;
  }

  &-blob {
    position: absolute;
    width: 800px;
    top: -100px;
    left: 100px;
  }

  &-Info {
    grid-column: 2 / 2;
    align-items: center;
    margin-top: 130px;
    margin-top: 130px;
    z-index: 10;

    &-headline {
      font-size: 56px;
      text-align: left;
    }

    &-subline {
      text-align: left;

      h2 {
        font-weight: 300;
        line-height: 20px;
        font-size: 30px;
      }
    }

    .Btn {
      margin-top: 30px;
      font-size: 20px;
    }
  }
}

.Footer {
  background: #52b788;
  height: 500px;
  margin-top: -5px;
}
</style>
