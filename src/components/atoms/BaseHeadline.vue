<template>
  <h1 v-if="tag === 'h1'" :class="styling"><slot /></h1>
  <h2 v-else :class="styling"><slot /></h2>
</template>

<script>
export default {
  name: "BaseHeadline",
  props: {
    tag: {
      type: String,
      default: "h2",
    },
    styling: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.h1 {
  font-size: 32px;
}

.h2 {
  font-size: 24px;
}

.h3 {
  font-size: 18px;
}

.h4 {
  font-size: 16px;
}

.h5 {
  font-size: 14px;
}

.h6 {
  font-size: 10px;
}
</style>
