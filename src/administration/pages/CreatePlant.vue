<template>
  <div class="PlantEditor">
    <!-- Search plant -->
    <div class="PlantEditor-search">
      <h1>Pflanze suchen</h1>
      <form @submit.prevent="searchPlant">
        <base-input-field v-model="searchInput" label="Name"></base-input-field>
        <base-button class="Btn--green">Suchen</base-button>
      </form>
    </div>

    <!-- Plant data -->
    <div class="PlantEditor-main">
      <div v-show="!addNewDamage" class="PlantEditor-data">
        <div class="PlantEditor-data-general" v-show="searchResult.id !== 0">
          <div class="PlantEditor-searchResultWrapper">
            <form @submit.prevent="editPlant" class="PlantEditor-searchResultEntry" @click="editPlant">
              <base-input-field :modelValue="searchResult.data.name" name="name" label="Name"></base-input-field>
              <base-input-field
                :modelValue="searchResult.data.general"
                name="general"
                label="Erklärung"
              ></base-input-field>
              <base-input-field
                :modelValue="searchResult.data.category"
                name="category"
                label="Kategorie"
              ></base-input-field>
            </form>
          </div>

          <div class="PlantEditor-data-currentDamage">
            <h2>Ausgewähltes Schadbild</h2>
            <form @submit.prevent="addDamage" class="PlantEditor-addDamageEntry">
              <base-input-field v-model="currentDamage.name" label="Schadbild"></base-input-field>
              <textarea v-model="currentDamage.desc" name="desc" placeholder="Beschreibung" rows="5"></textarea>
              <textarea v-model="currentDamage.tipps" name="tipps" placeholder="Tipps" rows="5"></textarea>
              <base-button class="Btn--green" type="submit">Speichern</base-button>
            </form>
          </div>
        </div>
        <div class="PlantEditor-data-damage">
          <div
            @click="showDamage"
            class="PlantEditor-data-damage--entry"
            v-for="damage in searchResult.data.damage"
            :key="damage.name"
            :id="damage.name"
          >
            <h1>{{ damage.name }}</h1>
          </div>
        </div>
        <div v-show="searchResult.id !== 0" class="PlantEditor-showAddDamageWrapper">
          <base-button @click="addNewDamage = !addNewDamage"><base-icon name="add" size="large" /> </base-button>
        </div>
      </div>

      <div v-show="addNewDamage" class="PlantEditor-addDamageWrapper">
        <form @submit.prevent="addDamage" class="PlantEditor-addDamageEntry">
          <base-input-field v-model="newDamage.name" label="Schadbild"></base-input-field>
          <textarea v-model="newDamage.desc" name="desc" placeholder="Beschreibung" rows="5"></textarea>
          <textarea v-model="newDamage.tipps" name="tipps" placeholder="Tipps" rows="5"></textarea>
          <base-button class="Btn--green" type="submit">Speichern</base-button>
        </form>
        <base-button @click="addNewDamage = !addDamage" class="Btn--pink" type="submit">Zurück</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/atoms/BaseButton.vue";
import BaseInputField from "../../components/atoms/BaseInputField.vue";
import BaseIcon from "../../components/atoms/BaseIcon.vue";
import { db } from "@/main";

export default {
  components: {
    BaseInputField,
    BaseButton,
    BaseIcon,
  },
  data() {
    return {
      searchInput: "",
      addNewDamage: false,
      newDamage: {
        desc: "",
        name: "",
        tipps: "",
      },
      currentDamage: {},
      searchResult: {
        data: {},
        id: 0,
      },
    };
  },
  methods: {
    // add new plant to the database
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
    // search for specific plant
    // currently return only one result
    searchPlant() {
      db.collection("plants")
        .where(`name`, "==", this.searchInput)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("hey");
            // this.addPlant();
          }
          querySnapshot.forEach((doc) => {
            this.searchResult.data = doc.data();
            this.searchResult.id = doc.id;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    // edit exisisting plant
    // only for general information (not damage)
    editPlant(submitEvent) {
      const inputTarget = submitEvent.target.elements;
      if (inputTarget) {
        db.collection("plants")
          .doc(this.searchResult.id)
          .update({
            category: inputTarget.category.value,
            general: inputTarget.general.value,
            name: inputTarget.name.value,
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    },
    // add new damage/pest to the plant
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
    showDamage(submitEvent) {
      const allDamages = this.searchResult.data.damage;
      const searchedDamage = submitEvent.target.id;
      const currentDamage = allDamages.filter((element) => element.name === searchedDamage);

      this.currentDamage = currentDamage[0];
    },
  },
};
</script>

<style lang="scss">
.PlantEditor {
  padding: 20px;
  text-align: left;

  textarea {
    font-size: 18px;
    font-family: $font-WS;
  }

  &-showAddDamageWrapper {
    margin-left: auto;
    height: min-content;

    .Btn {
      border: 0;
      background-color: transparent;
      transition: all 3s;
    }

    &:hover {
      background-color: palegreen;
    }
  }

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

  &-search {
    margin: 0 auto;

    form {
      display: flex;

      input {
        margin-right: 20px;
      }
    }
  }

  &-searchResultEntry {
    cursor: pointer;
    width: min-content;
  }

  &-addDamageEntry {
    display: flex;
    flex-direction: column;
    width: min-content;

    *:not(label):not(input) {
      margin-bottom: 20px;
    }

    .Btn {
      width: 140px;
    }
  }

  &-detailsWrapper {
    display: flex;
    justify-content: space-around;
  }

  &-textAreaWrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  &-plant {
    display: flex;
    flex-direction: column;
  }

  &-data {
    display: flex;

    &-currentDamage {
      width: min-content;
      cursor: pointer;

      h2 {
        margin-top: 0;
      }
    }

    &-damage {
      display: flex;
      flex-wrap: wrap;
    }

    &-damage--entry {
      border: 1px solid black;
      height: 200px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: 40px;

      h1 {
        pointer-events: none;
      }
    }
  }
}
</style>
