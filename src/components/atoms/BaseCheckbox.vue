<template>
  <label class="BaseCheckbox">
    <input class="BaseCheckbox__input" type="checkbox" />
    <span class="BaseCheckbox__checkmark"></span>
  </label>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.BaseCheckbox {
  width: 25px;
  height: 25px;
  cursor: pointer;

  &__checkmark {
    width: 100%;
    height: 100%;
    border: 2px solid #1e90ff;
    display: inline-block;
    border-radius: 3px;
    background: #1e90ff url("../../assets/icons/checkmark.png") center/1250% no-repeat;
    transition: background-size 0.2s ease;
  }

  &__input {
    display: none;

    &:checked + .BaseCheckbox__checkmark {
      background-size: 60%;
      transition: background-size 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
    }
  }
}
</style>
