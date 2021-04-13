<template>
  <div class="Header">
    <base-logo class="Header-Logo" />
    <ul class="Header-Nav">
      <router-link to="/Landingpage" class="Header-Nav-Entry">Warum Gardenbuddy?</router-link>
      <router-link to="/News" class="Header-Nav-Entry">News</router-link>
      <router-link to="/Register" class="Header-Nav-Entry">Registrieren</router-link>
      <button @click="showModal" class="Header-Nav-Entry Login">Einloggen</button>
    </ul>
    <classic-modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <base-headline>
          User Login
        </base-headline>
      </template>

      <template v-slot:body>
        <base-input-field variant="Input--green" type="email">Email</base-input-field>
        <base-input-field variant="Input--green" type="password">Passwort</base-input-field>
      </template>

      <template v-slot:footer>
        <base-button class="Btn--green">Login</base-button>
      </template>
    </classic-modal>
  </div>
</template>

<script>
import BaseLogo from "../atoms/BaseLogo";
import ClassicModal from "../molecules/ClassicModal";
import BaseHeadline from "../atoms/BaseHeadline";
import BaseInputField from "../atoms/BaseInputField";
import BaseButton from "../atoms/BaseButton.vue";

export default {
  name: "TheHeader",
  components: {
    BaseLogo,
    ClassicModal,
    BaseHeadline,
    BaseInputField,
    BaseButton,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.Header {
  display: grid;
  grid-template-columns: 1fr 3fr;
  position: relative;
  z-index: 5;

  &-Logo {
    width: 30%;
    padding-left: 20px;
  }

  &-Nav {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    align-items: center;

    &-Entry {
      margin-right: 80px;
      color: #2c3e50;
      font-size: 18px;
      cursor: pointer;
      position: relative;
      text-decoration: none;

      &:hover:not(:last-child):after {
        content: "";
        border-bottom: 2px solid black;
        width: 100%;
        position: absolute;
        bottom: -7px;
        left: 0;
        animation: underline 0.3s;
      }

      &.Login {
        border: 1px solid black;
        padding: 10px 20px;
        position: relative;
        z-index: 1;
        background: linear-gradient(to left, white 50%, darkslategrey 50%) right;
        background-size: 200%;
        transition: 0.2s ease-out;

        &:hover {
          background-position: left;
          color: white;
        }
      }
    }
  }
}

@keyframes underline {
  0% {
    width: 1%;
  }
  100% {
    width: 100%;
  }
}

.Modal-body {
  & div {
    width: 80%;
  }

  div:nth-child(1) {
    margin: 20px auto;
    margin-bottom: 40px;
  }

  div:nth-child(2) {
    margin: 20px auto;
  }
}
</style>

<style lang="scss">
.Input-Wrapper {
  margin: 20px 0;

  & .Input {
    width: 400px;
    font-size: 18px;
    line-height: 45px;
    height: 45px;
    font-family: $font-MS;
  }

  & .Input[type="password"] {
    font-size: 22px;
  }

  & .Label {
    font-size: 18px;
    top: inherit;
    font-family: $font-MS;
    font-weight: 400;
  }
}

.Header .Modal {
  position: absolute;
  top: 10%;
  right: 5%;
}
</style>
