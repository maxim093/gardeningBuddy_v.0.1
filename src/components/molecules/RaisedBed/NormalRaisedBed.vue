<template>
  <div class="Wrapper">
    <div class="RaisedBed">
      <div v-for="index in 4" :key="index" class="row">
        <button v-for="btnIndex in 6" :key="btnIndex" class="place"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 9,
      y: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
.Wrapper {
  // background-image: url("../../../assets/raisedBedNormal/raisedBed1.png");
  background-image: url("../../../assets/gartenKumpel/Raised bed front.png");
  // background-image: url("../../../assets/gartenKumpel/untitled.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  // left: 0;
  left: 100px;
  // top: 200px;
  top: 100px;
  z-index: 9999;
  width: 900px;
  height: 900px;
}

.RaisedBed {
  //background-color: #5a3921;
  // -webkit-app-region: no-drag;
  // transform: rotateX(35deg) rotateX(90deg) rotateZ(135deg) scaleZ(10);
  // perspective: 20em;
  // width: auto;
  // top: 30px;
  // left: 330px;
  // position: absolute;

  -webkit-app-region: no-drag;
  transform: rotateX(36deg) rotateX(86deg) rotateZ(136deg) scaleZ(10);
  perspective: 20em;
  width: auto;
  top: 268px;
  left: 232px;
  position: absolute;
}

.place {
  padding: 30px 30px;
  border-radius: 4px;
  margin: 5px;
  border: 1px solid white;
}

.row {
}

button {
  //   background-color: #87431d;
  background-color: transparent;
  border: none;

  &:active {
    background-color: #eee;
  }
}
</style>
