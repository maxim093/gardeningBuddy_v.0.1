<template>
  <div class="SpecialText-wrapper">
    Für gesunde
    <div class="SpecialText-flip">
      <div><div>Pflanzen</div></div>
      <div><div>Tiere</div></div>
      <div><div>Menschen</div></div>
    </div>
    dein Gardenbuddy
  </div>
</template>

<style lang="scss" scoped>
.SpecialText {
  &-wrapper {
    color: #999;
    text-transform: uppercase;
    font-size: 36px;
    font-weight: bold;
    position: fixed;
    width: 100%;
    bottom: 45%;
    display: block;
  }
  &-flip {
    height: 55px;
    overflow: hidden;
  }

  &-flip > div > div {
    color: white;
    padding: 4px 12px;
    height: 45px;
    margin-bottom: 45px;
    display: inline-block;
  }

  &-flip div:first-child {
    animation: show 5s linear infinite;
  }

  &-flip div div {
    background: #42c58a;
  }
  &-flip div:first-child div {
    background: #4ec7f3;
  }
  &-flip div:last-child div {
    background: #dc143c;
  }
}

@keyframes show {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}
</style>
