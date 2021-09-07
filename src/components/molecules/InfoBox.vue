<template>
  <div class="InfoBox">
    <tabs-wrapper class="Dashboard-Tabs">
      <Tab title="Info">
        <h1 class="InfoBox__title">{{ plantData.data.name }}</h1>

        <div class="InfoBox__main">
          <!-- InfoBox__left -->
          <div class="InfoBox__left">
            <div class="InfoBox__left__partner">
              <h3>Nachbarn</h3>
              <div class="InfoBox__left__entry">
                <base-icon name="happy-outline" size="large"></base-icon>
                <p>{{ plantData.data.goodPartner }}</p>
              </div>

              <div class="InfoBox__left__entry">
                <base-icon name="sad-outline" size="large"></base-icon>
                <p>{{ plantData.data.badPartner }}</p>
              </div>
            </div>

            <!-- CARE SECTION -->
            <div class="InfoBox__left__care">
              <h3>Pflege</h3>
              <div>
                <h4>Wasserbedarf</h4>
                <p>{{ plantData.data.watering }}</p>
              </div>

              <div>
                <h4>Düngung</h4>
                <p>{{ plantData.data.fertilization }}</p>
              </div>
            </div>

            <div class="InfoBox__left__generalInfo">
              <div>
                <h4>Vorsicht!</h4>
                <p>{{ plantData.data.warning }}</p>
              </div>

              <div>
                <h4>Tipps</h4>
                <p>{{ plantData.data.tipps }}</p>
              </div>

              <div>
                <h4>Fun Facts</h4>
                <p>{{ plantData.data.facts }}</p>
              </div>

              <div>
                <h4>Generell</h4>
                <p>{{ plantData.data.general }}</p>
              </div>

              <div>
                <h4>Gesundheitsvorteile</h4>
                <p>{{ plantData.data.healthBenefits }}</p>
              </div>
            </div>
          </div>

          <!-- InfoBox__right -->
          <div class="InfoBox__right">
            <div>
              <div>
                <h4>Samentyp</h4>
                <p>{{ plantData.data.seedType }}</p>
              </div>

              <div>
                <h4>Nährstoffbedarf</h4>
                <p>{{ plantData.data.nutritionalNeeds }}</p>
              </div>

              <div>
                <h4>Standort</h4>
                <p>{{ plantData.data.location }}</p>
              </div>
            </div>

            <div>
              <div>
                <h4>Vorzucht</h4>
                <p>Ja</p>
              </div>

              <div>
                <h4>Aussaat (draußen)</h4>
                <p>{{ plantData.data.sowing }}</p>
              </div>

              <div>
                <h4>Ernte</h4>
                <p>{{ plantData.data.harvest }}</p>
              </div>

              <div>
                <h4>Bodenbeschaffenheit</h4>
                <p>{{ plantData.data.ground }}</p>
              </div>

              <div>
                <h4>Insektenfreundlich</h4>
                <p>{{ plantData.data.insectFriendly }}</p>
              </div>

              <div>
                <h4>Abstand</h4>
                <p>{{ plantData.data.distance }}</p>
              </div>
            </div>
          </div>

          <!-- <div class="InfoBox__sideFacts">
          <h3>SideFacts</h3>
          <div>
            <base-icon name="warning-outline" size="large"></base-icon>
            <base-icon name="warning" size="large"></base-icon>
            <h4>Vorsicht!</h4>

            <p>{{ plantData.data.warning }}</p>
          </div>
        </div>

        <div>
          <base-icon name="earth-outline" size="large"></base-icon>
          <base-icon name="earth" size="large"></base-icon>
          <h4>General</h4>

          <p>{{ plantData.data.general }}</p>
        </div>

        <div>
          <base-icon name="book-outline" size="large"></base-icon>
          <base-icon name="book" size="large"></base-icon>
          <h4>Fun Facts</h4>

          <p>{{ plantData.data.facts }}</p>
        </div>

        <div>
          <base-icon name="heart-circle" size="large"></base-icon>
          <base-icon name="heart" size="large"></base-icon>
          <h4>Gesundheits benefits</h4>
          <p>{{ plantData.data.healthBenefits }}</p>
        </div> -->
        </div>
      </Tab>
      <Tab title="Neuigkeiten">Hfafafafafafaf</Tab>
      <Tab title="Todos">Hellafafafafafafafafafafaf3</Tab>
      <Tab title="Rezepte">Hafafafafa</Tab>
      <Tab title="Tipps">Hafafafafa</Tab>
    </tabs-wrapper>
  </div>
</template>

<script>
import BaseIcon from "../atoms/BaseIcon.vue";
import TabsWrapper from "./TabsWrapper";
import Tab from "./Tab";

export default {
  props: ["plantData"],
  components: {
    BaseIcon,
    Tab,
    TabsWrapper,
  },
};
</script>

<style lang="scss">
.Icon {
  min-width: 42px;
}

.InfoBox {
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  height: 80vh;
  // width: 40vw;

  width: 800px;
  margin-left: auto;
  position: relative;
  z-index: 5000;
  margin-right: 80px;
  border-radius: 15px;
  background: #fff;

  &__main {
    display: flex;
    text-align: left;
  }

  &__left {
    width: 80%;

    &__entry {
      display: flex;
      align-items: center;
    }

    &__care {
      p {
        padding-right: 45px;
      }
    }

    &__partner {
      p {
        padding-right: 45px;
      }
    }

    &__generalInfo {
      p {
        padding-right: 45px;
      }
    }
  }

  &__right {
    width: 50%;
  }

  &__title {
    text-align: left;
    margin: 20px 0;
  }

  .tab-content {
    overflow: auto;
    height: 800px;
  }
}
</style>
