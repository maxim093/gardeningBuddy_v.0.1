<template>
  <div>
    <router-link v-if="href" :href="href" class="Btn Btn--green"
      ><slot
    /></router-link>
    <button v-else class="Btn Btn--green"><slot /></button>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.Btn {
  border-radius: 5px;
  color: black;
  width: 15vw;
  height: 5vh;
  font-size: 16px;
  font-weight: 600;

  &--green {
    background-color: darkslategray;
    border: 4px solid palegreen;
    color: #fff;
  }

  &--pink {
    background-color: palevioletred;
    border: 4px solid peachpuff;
    color: #fff;
  }
  &--black {
    background-color: black;
    border: 4px solid black;
    color: #fff;
  }
  &--white {
    background-color: white;
    border: 4px solid black;
  }
}
</style>
