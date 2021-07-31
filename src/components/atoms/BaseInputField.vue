<!-- CustomInput.vue -->
<template>
  <div class="Input-Wrapper">
    <input
      :type="type"
      :class="setVariant"
      placeholder="&nbsp;"
      :value="modelValue"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label for="Input" class="Label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "BaseInputField",
  data() {
    return {
      val: this.value ? this.value : "",
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    variant: {
      type: String,
      default: "Input--green",
    },
    name: {
      type: String,
    },
  },
  computed: {
    setVariant() {
      if (this.variant) {
        return `Input ${this.variant} `;
      } else {
        return `Input`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.Input {
  font-size: $font-size-02;
  line-height: 36px;
  height: 36px;
  padding: 0 5px;
  border: none;
  // border-image-source: linear-gradient(to left, palegreen, palevioletred);
  background: rgba(#000, 0.05);
  box-shadow: inset 0 -1px 0 rgba(#000, 0.3);
  border-radius: 3px 3px 0 0;
  width: 100%;

  &-Wrapper {
    position: relative;
    display: flex;
  }

  &:hover {
    background: rgba(#000, 0.04);
    box-shadow: inset 0 -1px 0 rgba(#000, 0.5);
  }

  &--green:focus {
    box-shadow: inset 0 -2px 0 palegreen;
  }

  &--pink:focus {
    box-shadow: inset 0 -2px 0 palevioletred;
  }

  &--black:focus {
    box-shadow: inset 0 -2px 0 #000;
  }

  &:focus {
    outline: none;
    background: rgba(#000, 0.05);
    border-radius: 3px 3px 2px 2px;
  }

  &:focus + .Label {
    font-size: 12px;
    top: -20px;
    font-weight: 600;
  }

  &--pink:focus + .Label {
    color: palevioletred;
  }

  &--green:focus + .Label {
    color: palegreen;
  }

  &--black:focus + .Label {
    color: black;
  }

  &:not(:placeholder-shown) + .Label {
    top: -20px;
    font-weight: 600;
    font-size: 12px;
  }
}

.Label {
  font-size: $font-size-01;
  position: absolute;
  left: 0;
  bottom: 0;
  pointer-events: none;
  padding: 5px;
  top: 10px;
  transition: all ease-out 0.1s;
  color: rgba(#000, 0.5);
}
</style>
