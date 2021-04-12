<template>
  <Header />
  <div class="Register">
    <ClassicForm>
      <template v-slot:header>
        Jetzt nur noch schnell <span>Registrieren</span><br />
        und dann kanns losgehen! 😍
      </template>
    </ClassicForm>
    <img :src="Background" alt="" class="Register-background" />
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import ClassicForm from "../components/molecules/ClassicForm";
import Background from "../assets/blob1.svg";

export default {
  data() {
    return {
      Background,
    };
  },
  components: {
    Header,
    ClassicForm,
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
