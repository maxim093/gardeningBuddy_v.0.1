<template>
  <transition name="Modal-fade">
    <div class="Modal__backdrop" @click="close">
      <div class="Modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <button class="Modal__close" @click="close">
          <base-icon name="close-outline" size="large"></base-icon>
        </button>

        <Login />
      </div>
    </div>
  </transition>
</template>

<script>
import Login from "../../pages/Login.vue";
import BaseIcon from "../atoms/BaseIcon.vue";

export default {
  name: "ClassicModal",
  components: {
    Login,
    BaseIcon,
  },
  methods: {
    close(e) {
      if (e.target.closest(".Modal") && !e.target.closest(".Modal__close")) return;
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.Modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  width: 400px;
  padding: 40px;

  &__backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__close {
    background: none;
    border: 0;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
}

.Modal-fade-enter,
.Modal-fade-leave-to {
  opacity: 0;
}

.Modal-fade-enter-active,
.Modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
