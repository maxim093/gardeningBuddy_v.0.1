<template>
  <router-link :to="to" :class="setVariant"><slot /></router-link>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    to: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
  },
  computed: {
    setVariant() {
      if (this.variant) {
        return `Link  ${this.variant}`;
      } else {
        return "Link";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Link {
  text-decoration: none;
  transition: all ease-out 0.1s;

  &--white {
    text-decoration: none;
    color: white;

    &:visited {
      color: white;
    }
    &:hover {
      color: black;
    }
  }

  &--black {
    text-decoration: none;
    color: black;

    &:visited {
      color: black;
    }
    &:hover {
      color: palevioletred;
    }
  }
}
</style>
