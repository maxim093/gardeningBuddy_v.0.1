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
          <slot name="footer">Default footer!</slot>
          <button type="button" class="btn-green" @click="close" aria-label="Close modal">Close</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
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
    padding: 15px;
    display: flex;
  }

  &-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4aae9b;
    justify-content: space-between;
  }

  &-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
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

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
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
