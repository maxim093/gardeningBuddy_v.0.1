<template>
  <div class="HowToStart">
    <!-- <div class="HowToStart-heading">
      <h1>Wie willst du starten?</h1>
      <p></p>
    </div>
    <div class="HowToStart-options">
      <div class="HowToStart-options-entry" v-for="option in options" :key="option.name" :class="option.color">
        <h2>{{ option.name }}</h2>
      </div>
    </div> -->
    <raised-bed></raised-bed>
  </div>
</template>

<script>
import RaisedBed from "../components/molecules/RaisedBed/RaisedBed.vue";
export default {
  components: { RaisedBed },
  data() {
    return {
      options: [
        { name: "Beet anlegen", color: "orange" },
        { name: "Düngeplan erstellen", color: "green" },
        { name: "Schädlinge bekämpfen", color: "red" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.HowToStart {
  &-heading {
    margin-top: 10%;
    h1 {
      font-size: 58px;
    }
  }
  &-options {
    display: flex;
    justify-content: space-around;

    &-entry {
      border-radius: 15px;
      padding: 20px;
      &.green {
        background: #45d4d2;
      }
      &.orange {
        background: #f4c1a2;
      }
      &.red {
        background: #b66b52;
      }
    }
  }
}
</style>
