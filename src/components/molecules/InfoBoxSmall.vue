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
</template>

<script>
import { db } from "@/main";

export default {
  props: ["plant"],
  data() {
    return {
      plantInfo: {
        data: {},
        id: 0,
      },
    };
  },
  watch: {
    plant: function() {
      this.searchPlant();
    },
  },
  methods: {
    searchPlant() {
      db.collection("plants")
        .where(`name`, "==", this.plant.toLowerCase())
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          if (querySnapshot.empty) {
            console.log("ERROR");
          }
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            this.plantInfo.data = doc.data();
            this.plantInfo.id = doc.id;
          });
        })
        .then(() => {})
        .catch((error) => {
          this.$store.dispatch("setError", error);
        });
    },
  },
};
</script>

<style lang="scss"></style>
