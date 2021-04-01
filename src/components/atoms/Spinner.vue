<template>
  <span></span>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  position: relative;
  display: inline-block;
}

.loader::after,
.loader::before {
  content: "";
  width: 48px;
  height: 48px;
  border: 2px solid #000;
  position: absolute;
  left: 0;
  top: 0;
  animation: rotation 2s ease-in-out infinite;
  box-sizing: border-box;
}

.loader::after {
  border-color: #ff3d00;
  animation-delay: 1s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
