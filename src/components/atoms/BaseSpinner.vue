<template>
  <span> <slot /></span>
</template>

<script>
export default {
  name: "BaseSpinner",
};
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  display: block;
  position: relative;
  color: #fff;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 50%;
  transform: scale(0.5) translate(0, 0);
  background-color: palegreen;
  border-radius: 50%;
  animation: animloader 1s infinite ease-in-out;
}
.loader::before {
  background-color: palevioletred;
  transform: scale(0.5) translate(-48px, -48px);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animloader {
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
}

/* SECOND LOADER */
.loader2 {
  width: 48px;
  height: 6px;
  display: block;
  position: relative;
  border-radius: 4px;
  color: palegreen;
  box-sizing: border-box;
  animation: animloader2 0.6s linear infinite;
}

@keyframes animloader2 {
  0% {
    box-shadow: -10px 20px, 10px 35px, 0px 50px;
  }
  25% {
    box-shadow: 0px 20px, 0px 35px, 10px 50px;
  }
  50% {
    box-shadow: 10px 20px, -10px 35px, 0px 50px;
  }
  75% {
    box-shadow: 0px 20px, 0px 35px, -10px 50px;
  }
  100% {
    box-shadow: -10px 20px, 10px 35px, 0px 50px;
  }
}

/*  LOADER 3 */

.loader3 {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader3::after,
.loader3::before {
  content: "";
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: palevioletred;
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader3 2s linear infinite;
}
.loader3::after {
  animation-delay: 1s;
}

@keyframes animloader3 {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* LOADER 4 */

.loader4 {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid palevioletred;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader4::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid palegreen;
  border-left: 4px solid transparent;
}
@keyframes rotation4 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* LOADER 5 */
.loader5 {
  width: 48px;
  height: 40px;
  margin-top: 30px;
  display: inline-block;
  position: relative;
  background: palegreen;
  border-radius: 15% 15% 35% 35%;
}
.loader5::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 45px;
  top: 8px;
  border: 4px solid palegreen;
  width: 16px;
  height: 20px;
  border-radius: 0 4px 4px 0;
}
.loader5:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 10px;
  color: palegreen;
  top: -15px;
  left: 11px;
  box-sizing: border-box;
  animation: animloader5 1s ease infinite;
}

@keyframes animloader5 {
  0% {
    box-shadow: 2px 0px palevioletred, 12px 0px palegreen, 20px 0px palevioletred;
  }
  50% {
    box-shadow: 2px -5px palegreen, 12px -3px palevioletred, 20px -2px palegreen;
  }
  100% {
    box-shadow: 2px -8px palevioletred, 12px -5px palegreen, 20px -5px palegreen;
  }
}
</style>
