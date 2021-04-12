<template>
  <div class="Header">
    <Logo class="Header-Logo" />
    <ul class="Header-Nav">
      <router-link to="/Landingpage" class="Header-Nav-Entry">Warum Gardenbuddy?</router-link>
      <router-link to="/News" class="Header-Nav-Entry">News</router-link>
      <router-link to="/Register" class="Header-Nav-Entry">Registrieren</router-link>
      <button @click="showModal" class="Header-Nav-Entry Login">Einloggen</button>
    </ul>
    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <Headline></Headline>
        User Login
      </template>

      <template v-slot:body> </template>

      <template v-slot:footer>
        This is a new modal footer.
      </template>
    </Modal>
  </div>
</template>

<script>
import Logo from "../atoms/Logo";
import Modal from "../molecules/Modal";
import Headline from "../atoms/Headline";

export default {
  components: {
    Logo,
    Modal,
    Headline,
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
</style>
