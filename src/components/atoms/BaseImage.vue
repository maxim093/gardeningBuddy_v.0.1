<template>
  <div :class="setVariant">
    <img :class="setSize" :src="src" />
  </div>
</template>

<script>
export default {
  name: "BaseImage",
  props: {
    src: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
  },
  computed: {
    setVariant() {
      if (this.variant) {
        return `Image--Wrapper ${this.variant} `;
      } else {
        return `Image--Wrapper`;
      }
    },
    setSize() {
      if (this.size) {
        return `Image ${this.size} `;
      } else {
        return `Image`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Image {
  &--thumbnail {
    width: 50px;
  }

  &--small {
    width: 100px;
  }

  &--medium {
    width: 400px;
  }

  &--large {
    width: 600px;
  }
}

.circular--square {
  border-radius: 50%;
}

// The width and height property values must be the same so that the wrapper div (.circular--landscape) renders as a square.

// In addition, the width and height property values must be equal to or less than the height of the img. This makes sure the img element is able to occupy the wrapper div without being stretched out.

// Generally, the subject of landscape photos will — but not always — be located around the center of the composition. To give us the best chance of not cropping out the photo’s subject, we can horizontally center the img element in the wrapper div by nudging the img element to the left to compensate for the left-biased cropping.

// The amount we nudge the img element is equal to 25% of the width/height of the wrapper div. In this case, we will nudge the image 50px (25% of 200px is 50px) to the left. We can accomplish this by setting the margin-left property of the img element to a negative value:

// margin-left: -50px;

.circular--landscape {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;

  & img {
    width: auto;
    height: 100%;
    margin-left: -50px;
  }
}

// The assumption we’ll make for portrait-oriented images is that the subject of the photo is at the top-center of the composition. Again, this isn’t going to be the case in every single portrait photo.

// Similar to landscape photos, the wrapper div of portrait-oriented img elements must have equal width and height property values so that the wrapper is a perfect square.

// This time, the width/height property value must be equal or less than the width of the img element so that the image can cover the wrapper div without being stretched out.

// For portrait-oriented images, we assign a height of auto and width of 100%. (We did the opposite for landscape-oriented images.)

// We don’t need to move the img element, because our expectation is that the subject of the photo is at the top-center of the composition.

.circular--portrait {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;

  & img {
    width: 100%;
    height: auto;
  }
}
</style>
