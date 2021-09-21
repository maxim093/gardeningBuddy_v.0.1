<template>
  <ion-icon :name="name" :size="size" :class="setColor"></ion-icon>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      default: "heart",
      required: true,
    },
    size: {
      type: String,
      default: "small",
    },
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    setColor() {
      if (this.color) {
        return `Icon  ${this.color}`;
      } else {
        return "Icon";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Icon {
  &--green {
    color: palegreen;
  }

  &--pink {
    color: palevioletred;
  }

  &--white {
    color: white;
  }

  &--black {
    color: black;
  }
}
</style>
