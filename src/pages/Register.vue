<template>
  <the-header />
  <div class="Register">
    <classic-form>
      <template v-slot:header>
        Jetzt nur noch schnell <span>Registrieren</span><br />
        und dann kanns losgehen! 😍
      </template>
    </classic-form>
    <img :src="Background" alt="" class="Register-background" />
  </div>
</template>

<script>
import ClassicForm from "../components/molecules/ClassicForm";
import Background from "../assets/blob1.svg";
import TheHeader from "../components/layout/TheHeader.vue";

export default {
  data() {
    return {
      Background,
    };
  },
  components: {
    ClassicForm,
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
.Register {
  position: relative;

  &-background {
    top: -250px;
    left: 280px;
    position: absolute;
    z-index: 1;
    width: 1000px;
  }
}
</style>
