<template>
  <div class="Showcase-Wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.Showcase-Wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
</style>
