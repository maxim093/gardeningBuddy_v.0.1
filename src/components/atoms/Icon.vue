<template>
  <ion-icon :name="name" :size="size" :class="setColor"></ion-icon>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "heart",
      required: true,
    },
    size: {
      type: String,
      default: "small",
      required: true,
    },
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    setColor() {
      if (this.color) {
        return this.color;
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
}
</style>
