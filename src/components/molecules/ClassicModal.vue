<template>
  <transition name="Modal-fade">
    <div class="Modal-backdrop">
      <div class="Modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="Modal-header" id="modalTitle">
          <slot name="header">Cool title!</slot>
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
        </header>

        <section class="Modal-body" id="modalDescription">
          <slot name="body">Default body!</slot>
        </section>

        <footer class="Modal-footer">
          <slot name="footer"></slot>
          <base-button class="Btn--white" @click="close" aria-label="Close modal">Zurück</base-button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseButton from "../atoms/BaseButton";
export default {
  name: "ClassicModal",
  components: {
    BaseButton,
  },
  methods: {
    close() {
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

  &-backdrop {
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

  &-header,
  &-footer {
    display: flex;
  }

  &-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4aae9b;
    justify-content: center;
    padding: 10px;
  }

  &-footer {
    padding: 15px;
    border-top: 1px solid #eeeeee;
    flex-direction: row;
    justify-content: space-evenly;
  }
  &-body {
    position: relative;
    padding: 20px 10px;
  }
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
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
