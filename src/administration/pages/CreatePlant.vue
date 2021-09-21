<template>
  <div class="PlantEditor">
    <!-- Search plant -->
    <div class="PlantEditor__search">
      <h1>Pflanze suchen</h1>
      <form @submit.prevent="searchPlant">
        <base-input-field v-model="searchInput" label="Name"></base-input-field>
        <base-button class="Btn--pink">Suchen</base-button>
        <base-button @click="editPlant" class="Btn--green" type="button">Speichern</base-button>
        <base-button @click="addNewPlant = !addNewPlant" class="Btn--white" type="button"
          >Neue Pflanzen anlegen</base-button
        >
      </form>
    </div>

    <!-- Plant data -->
    <div class="PlantEditor__main">
      <div v-show="!addNewDamage && !addNewPlant" class="PlantEditor__data">
        <div class="PlantEditor__data__general" v-show="searchResult.id !== 0">
          <div class="PlantEditor__searchResultWrapper">
            <form class="PlantEditor__searchResultEntry" @click="editPlant">
              <base-input-field v-model="searchResult.data.name" name="name" label="Name"></base-input-field>
              <label for="general">Erklärung</label>
              <textarea
                v-model="searchResult.data.general"
                name="general"
                placeholder="Erklärung"
                cols="61"
                rows="10"
              ></textarea>
              <base-input-field
                v-model="searchResult.data.category"
                name="category"
                label="Kategorie"
              ></base-input-field>
              <base-input-field
                v-model="searchResult.data.location"
                name="location"
                label="Standort"
              ></base-input-field>
              <base-input-field v-model="searchResult.data.ground" name="ground" label="Boden"></base-input-field>
              <base-input-field
                v-model="searchResult.data.goodPartner"
                name="goodPartner"
                label="Gute Nachbarn"
              ></base-input-field>
              <base-input-field
                v-model="searchResult.data.badPartner"
                name="bardPartner"
                label="Schlechte Nachbarn"
              ></base-input-field>
              <base-input-field v-model="searchResult.data.distance" name="distance" label="Abstand"></base-input-field>
              <base-input-field
                v-model="searchResult.data.seedType"
                name="seedType"
                label="Samentyp(hell/dunkelkeimer)"
              ></base-input-field>
              <label for="nutritionalNeeds">Fruchtfolge/Nährstoffbedarf</label>
              <textarea
                v-model="searchResult.data.nutritionalNeeds"
                name="nutritionalNeeds"
                placeholder="Fruchtfolge/Nährstoffbedarf"
                cols="61"
                rows="10"
              ></textarea>
              <base-input-field v-model="searchResult.data.heyday" name="heyday" label="Blütezeit"></base-input-field>
              <base-input-field
                v-model="searchResult.data.insectFriendly"
                name="insectFriendly"
                label="Insektenfreundlich"
              ></base-input-field>
              <label for="watering">Wasserbedarf</label>
              <textarea
                v-model="searchResult.data.watering"
                name="watering"
                placeholder="Wasserbedarf"
                cols="61"
                rows="10"
              ></textarea>
              <label for="fertilization">Düngung</label>
              <textarea
                v-model="searchResult.data.fertilization"
                name="fertilization"
                placeholder="Düngung"
                cols="61"
                rows="10"
              ></textarea>
              <label for="culture">Kultur</label>
              <textarea
                v-model="searchResult.data.culture"
                name="culture"
                placeholder="Kultur"
                cols="61"
                rows="10"
              ></textarea>
              <base-input-field v-model="searchResult.data.harvest" name="harvest" label="Ernte"></base-input-field>
              <base-input-field v-model="searchResult.data.sowing" name="harvest" label="Aussaat"></base-input-field>
              <label for="wintering">Überwinterung</label>
              <textarea
                v-model="searchResult.data.wintering"
                name="wintering"
                placeholder="Überwinterung"
                cols="61"
                rows="10"
              ></textarea>
              <label for="tipps">Tipps</label>
              <textarea
                v-model="searchResult.data.tipps"
                name="tipps"
                placeholder="Tipps"
                cols="61"
                rows="10"
              ></textarea>
              <label for="healthBenefits">Gesundheitsvorteile</label>
              <textarea
                v-model="searchResult.data.healthBenefits"
                name="healthBenefits"
                placeholder="Gesundheitsvorteile"
                cols="61"
                rows="10"
              ></textarea>
              <label for="warning">Achtung!</label>
              <textarea
                v-model="searchResult.data.warning"
                name="warning"
                placeholder="Achtung!"
                cols="61"
                rows="10"
              ></textarea>
              <label for="facts">Fakten</label>
              <textarea
                v-model="searchResult.data.facts"
                name="facts"
                placeholder="Fakten"
                cols="61"
                rows="10"
              ></textarea>
            </form>
          </div>
        </div>
        <div class="PlantEditor__data__damage">
          <div
            @click="showDamage"
            class="PlantEditor__data__damage__entry"
            v-for="damage in searchResult.data.damage"
            :key="damage.name"
            :id="damage.name"
          >
            <base-button @click="deleteDamage">
              <base-icon name="trash-outline"></base-icon>
            </base-button>
            <h1>{{ damage.name }}</h1>
          </div>

          <!-- Plant Damage Entry -->
          <div v-if="currentDamage.name" class="PlantEditor__data__currentDamage">
            <h2>Ausgewähltes Schadbild</h2>
            <form class="PlantEditor__addDamageEntry">
              <base-input-field v-model="currentDamage.name" label="Schadbild"></base-input-field>
              <textarea v-model="currentDamage.desc" name="desc" placeholder="Beschreibung" rows="5"></textarea>
              <textarea v-model="currentDamage.tipps" name="tipps" placeholder="Tipps" rows="5"></textarea>
            </form>
          </div>
        </div>
        <div v-show="searchResult.id !== 0" class="PlantEditor__showAddDamageWrapper">
          <base-button @click="addNewDamage = !addNewDamage"><base-icon name="add" size="large" /> </base-button>
        </div>
      </div>

      <!-- Add new Damage data -->
      <div v-show="addNewDamage" class="PlantEditor__addDamageWrapper">
        <form @submit.prevent="addDamage" class="PlantEditor__addDamageEntry">
          <base-input-field v-model="newDamage.name" label="Schadbild"></base-input-field>
          <textarea v-model="newDamage.desc" name="desc" placeholder="Beschreibung" rows="5"></textarea>
          <textarea v-model="newDamage.tipps" name="tipps" placeholder="Tipps" rows="5"></textarea>
          <base-button class="Btn--green" type="submit">Speichern</base-button>
        </form>
        <base-button @click="addNewDamage = !addDamage" class="Btn--pink" type="submit">Zurück</base-button>
      </div>

      <div class="PlantEditor__addNewPlant" v-if="addNewPlant">
        <h1>Neue Pflanze anlegen</h1>
        <form @submit.prevent="addPlant">
          <base-input-field v-model="newPlant.name" label="Name"></base-input-field>
          <base-input-field v-model="newPlant.category" label="Kategorie"></base-input-field>
          <base-button class="Btn--pink" type="submit">Speichern</base-button>
        </form>
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
      newPlant: {
        name: "",
        category: "",
        damage: [{ desc: "", name: "", tipps: "" }],
      },
      searchInput: "",
      addNewDamage: false,
      addNewPlant: false,
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
      db.collection("plants")
        .add(this.newPlant)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          this.$store.dispatch("error/setError", error);
        });
    },
    // search for specific plant
    // currently return only one result
    searchPlant() {
      this.addNewPlant = false;
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
          this.$store.dispatch("error/setError", error);
        });
    },
    // edit exisisting plant
    // only for general information (not damage)
    editPlant() {
      if (this.searchResult.data.damage === undefined) {
        const addDamageIfNotExist = {
          name: this.searchResult.data.name,
          damage: [{ desc: "", name: "", tipps: "" }],
        };
        db.collection("plants")
          .doc(this.searchResult.id)
          .update(addDamageIfNotExist)
          .catch((error) => {
            this.$store.dispatch("error/setError", error);
          });
        return;
      } else {
        this.searchResult.data.damage.find((e) => e.name === this.currentDamage.name);
        console.log(this.searchResult);

        db.collection("plants")
          .doc(this.searchResult.id)
          .update(this.searchResult.data)
          .catch((error) => {
            this.$store.dispatch("error/setError", error);
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
          .then(() => {
            this.addNewDamage = false;
            this.searchPlant();
          })
          .catch((error) => {
            this.$store.dispatch("error/setError", error);
          });
      }
    },
    showDamage(submitEvent) {
      if (submitEvent.target.id) {
        const allDamages = this.searchResult.data.damage;
        const searchedDamage = submitEvent.target.id;
        const currentDamage = allDamages.filter((element) => element.name === searchedDamage);

        this.currentDamage = currentDamage[0];
      }
    },
    deleteDamage(submitEvent) {
      const id = submitEvent.target.closest(".PlantEditor__data__damage__entry").id;
      const removedDamage = this.searchResult.data.damage.filter((element) => element.name !== id);

      db.collection("plants")
        .doc(this.searchResult.id)
        .update({
          damage: removedDamage,
        })
        .then(() => {
          this.currentDamage = this.searchResult.data.damage[0];
          this.searchResult.data.damage = removedDamage;
        })
        .catch((error) => {
          this.$store.dispatch("error/setError", error);
        });
    },
  },
};
</script>

<style lang="scss">
.PlantEditor {
  padding: 20px;
  text-align: left;

  .Label {
    color: #000;
  }

  textarea {
    font-size: 18px;
    font-family: $font-WS;
  }

  &__showAddDamageWrapper {
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

  &__textArea__wrapper {
    display: flex;
    flex-wrap: wrap;

    & textarea {
      width: 100%;
    }
  }

  &__search {
    margin: 0 auto;

    .Btn {
      height: 55px;
      margin-right: 10px;
    }

    form {
      display: flex;
      align-items: center;

      input {
        margin-right: 20px;
      }
    }
  }

  &__searchResultEntry {
    cursor: pointer;
    width: min-content;

    .Input-Wrapper .Input {
      width: 600px;
    }
  }

  &__addDamageEntry {
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

  &__detailsWrapper {
    display: flex;
    justify-content: space-around;
  }

  &__textAreaWrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  &__plant {
    display: flex;
    flex-direction: column;
  }

  &__data {
    display: flex;

    &__currentDamage {
      width: min-content;
      cursor: pointer;
      margin-left: 50px;

      h2 {
        margin-top: 0;
      }
    }

    &__damage {
      display: flex;
      flex-wrap: wrap;
      align-content: baseline;
    }

    &__damage__entry {
      border: 1px solid black;
      height: 200px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: 40px;
      margin-bottom: 20px;
      position: relative;
      word-break: break-word;

      .Btn {
        position: absolute;
        top: 5px;
        right: 5px;
        background: none;
        border: 0;
      }

      h1 {
        pointer-events: none;
      }
    }
  }

  &__addNewPlant {
    margin-top: 10%;
  }
}
</style>
