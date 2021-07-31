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
      x: 10,
      y: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
.Wrapper {
  background-image: url("../../../assets/test.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 1000px;
}

.RaisedBed {
  //   background-color: #5a3921;
  -webkit-app-region: no-drag;
  //   transform: rotateX(40deg) rotateX(80deg) rotateZ(40deg) scaleZ(10);
  transform: rotateX(35deg) rotateX(90deg) rotateZ(136deg) scaleZ(10);
  perspective: 20em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 700px;
  top: 110px;
  margin-left: 130px;
  position: absolute;
}

.place {
  padding: 30px 30px;
  border-radius: 4px;
  margin: 5px;
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
