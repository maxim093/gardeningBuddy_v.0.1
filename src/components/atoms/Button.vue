<template>
  <a v-if="href" :href="href" class="Btn Link"><slot /></a>
  <button v-else class="Btn"><slot /></button>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.Link {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.Btn {
  border-radius: 5px;
  color: black;
  padding: 15px 35px;
  font-size: $font-size-01;
  font-weight: 600;
  cursor: pointer;

  &--green {
    background-color: darkslategray;
    border: 4px solid palegreen;
    color: white;
  }

  &--pink {
    background-color: palevioletred;
    border: 4px solid peachpuff;
    color: white;
  }
  &--white {
    background-color: white;
    border: 4px solid black;
    color: black;
  }
}
</style>
