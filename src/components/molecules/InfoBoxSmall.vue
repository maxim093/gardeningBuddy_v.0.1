<template>
  <div class="InfoBoxSmall">
    <h2>{{ plantInfo.data.name }}</h2>
    <p>{{ plantInfo.data.goodPartner }}</p>
    <p>{{ plantInfo.data.badPartner }}</p>
    <p>{{ plantInfo.data.watering }}</p>
    <p>{{ plantInfo.data.fertilization }}</p>
    <p>{{ plantInfo.data.location }}</p>
    <p>{{ plantInfo.data.distance }}</p>
    <p>{{ plantInfo.data.nutritionalNeeds }}</p>
    <p>{{ plantInfo.data.seedType }}</p>
  </div>
  <base-button v-if="plantInfo.id !== 0" @click="savePlant" class="Btn--green">Pflanzen</base-button>
</template>

<script>
import { db } from "@/main";
import BaseButton from "../atoms/BaseButton.vue";

export default {
  components: { BaseButton },
  props: ["plant"],
  emits: ["savePlant"],
  data() {
    return {
      plantInfo: {
        data: {},
        id: 0,
      },
    };
  },
  watch: {
    plant: function(newValue) {
      if (newValue.length < 1) {
        this.plantInfo = {
          data: {},
          id: 0,
        };
        return;
      }
      this.searchPlant();
    },
  },
  methods: {
    searchPlant() {
      db.collection("plants")
        .where(`name`, "==", this.plant.toLowerCase())
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("ERROR");
          }
          querySnapshot.forEach((doc) => {
            this.plantInfo.data = doc.data();
            this.plantInfo.id = doc.id;
          });
        })
        .then(() => {})
        .catch((error) => {
          this.$store.dispatch("error/setError", error);
        });
    },
    savePlant() {
      this.$emit("savePlant", this.plantInfo.data.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.Btn {
  position: absolute;
  right: 30px;
  bottom: 60px;
}
</style>
