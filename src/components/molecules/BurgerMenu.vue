<template>
  <div @click="openMenu" class="BurgerMenu" ref="btn">
    <div class="BurgerMenu__burger"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    openMenu() {
      const btn = this.$refs.btn;
      if (!this.menuOpen) {
        btn.classList.add("open");
        this.menuOpen = true;
      } else {
        btn.classList.remove("open");
        this.menuOpen = false;
      }
      this.$emit("menuClicked", this.menuOpen);
    },
  },
};
</script>

<style lang="scss">
.BurgerMenu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  box-sizing: 0;
  margin: 0;
  padding: 0;
  transform: scale(0.6);

  &__burger {
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 6px;
      background: #fff;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      transform: translate(-25px, -16px);
    }
    &::after {
      transform: translate(-25px, 16px);
    }
  }

  &.open .BurgerMenu__burger {
    transform: translateX(-50px);
    background: transparent;

    &::before {
      transform: rotate(45deg) translate(15px, -15px);
    }

    &::after {
      transform: rotate(-45deg) translate(15px, 15px);
    }
  }
}
</style>
