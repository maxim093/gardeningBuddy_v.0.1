<template>
  <div class="CreatePlant">
    <div class="CreatePlant-searchWrapper">
      <h1>Pflanze suchen</h1>
      <form @submit.prevent="searchPlant">
        <base-input-field v-model="searchInput" label="Name"></base-input-field>
        <base-button class="Btn--green">Suchen</base-button>
      </form>
    </div>

    <div class="CreatePlant-searchResultWrapper">
      <form @submit.prevent="editPlant" class="CreatePlant-searchResultEntry" @click="editPlant">
        <base-input-field :modelValue="searchResult.data.name" name="name" label="Name"></base-input-field>
        <base-input-field :modelValue="searchResult.data.general" name="general" label="Erklärung"></base-input-field>
        <base-input-field :modelValue="searchResult.data.category" name="category" label="Kategorie"></base-input-field>
        <div v-for="damage in searchResult.data.damage" :key="damage.name">
          <base-input-field :modelValue="damage.name" name="damage" label="Schadbild"></base-input-field>
          <textarea :value="damage.desc" name="desc"></textarea>
          <textarea :value="damage.tipps" name="tipps"></textarea>
          <button type="submit">Klick</button>
        </div>
      </form>
    </div>

    <div class="CreatePlant-addDamageWrapper">
      <form @submit.prevent="addDamage">
        <base-input-field v-model="newDamage.name" label="Schadbild"></base-input-field>
        <textarea v-model="newDamage.desc" name="desc"></textarea>
        <textarea v-model="newDamage.tipps" name="tipps"></textarea>
        <button type="submit">Klick</button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/atoms/BaseButton.vue";
import BaseInputField from "../../components/atoms/BaseInputField.vue";
import { db } from "@/main";

export default {
  components: {
    BaseInputField,
    BaseButton,
  },
  data() {
    return {
      searchInput: "",
      newDamage: {
        desc: "",
        name: "",
        tipps: "",
      },
      searchResult: {
        data: {},
        id: 0,
      },
    };
  },
  methods: {
    addPlant() {
      db.collection(this.species.toLowerCase())
        .add({
          Name: this.name,
          Schadbilder: {
            Name: this.pest,
            Erklärung: this.description,
            Tipps: this.tipps,
          },
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    searchPlant() {
      db.collection("plants")
        .where(`name`, "==", this.searchInput)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.searchResult.data = doc.data();
            this.searchResult.id = doc.id;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    editPlant(submitEvent) {
      const inputTarget = submitEvent.target.elements;
      if (inputTarget) {
        db.collection("plants")
          .doc(this.searchResult.id)
          .update({
            category: inputTarget.category.value,
            damage: [
              {
                desc: inputTarget.category.value,
                name: inputTarget.damage.value,
                tipps: inputTarget.tipps.value,
              },
            ],
            general: inputTarget.general.value,
            name: inputTarget.name.value,
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    },
    addDamage(submitEvent) {
      const inputTarget = submitEvent.target.elements;
      if (inputTarget) {
        db.collection("plants")
          .doc(this.searchResult.id)
          .update({
            damage: [...this.searchResult.data.damage, this.newDamage],
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    },
  },
};
</script>

<style lang="scss">
.CreatePlant {
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;
  flex-direction: column;

  &-textArea-wrapper {
    display: flex;
    flex-wrap: wrap;

    & textarea {
      width: 100%;
    }
  }

  .Btn {
    margin: 1rem 0;
    margin-right: 100%;
  }

  &-searchWrapper {
    margin: 0 auto;

    form {
      display: flex;

      input {
        margin-right: 20px;
      }
    }
  }

  &-searchResultEntry {
    border: 1px solid palegreen;
    padding: 20px;
    cursor: pointer;
  }
}
</style>
