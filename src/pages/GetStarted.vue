<template>
  <div class="GetStarted">
    <div class="GetStarted__header">
      <h1 class="GetStarted__header__title">Wähle als erstes dein Beet aus</h1>
      <p class="GetStarted__header__subTitle">
        Bitte wähle anhand deiner Möglichkeiten und Wünsche ein Beet für deinen Garten/Balkon aus. Dies dient nur zum
        schnellen Ersten Start, du kannst danach jederzeit weitere Beete hinzufügen.
      </p>
    </div>

    <transition name="fade">
      <div v-if="optionIsChosen" class="GetStarted__success">
        <h2>Super Sache!</h2>
      </div>
    </transition>

    <div class="GetStarted__main">
      <div
        v-for="option in options"
        :key="option.name"
        class="GetStarted__main__option"
        :class="setColor(option.color)"
        @click="chooseOption"
        :id="option.name"
        v-show="option.show === true"
      >
        <h3 class="GetStarted__main__option__title">{{ option.name }}</h3>
        <p class="GetStarted__main__option__subTitle">{{ option.description }}</p>
        <img class="GetStarted__main__option__img" :src="option.img" :alt="option.name" />
      </div>
    </div>
  </div>
</template>

<script>
import raisedBed from "../assets/raisedbed.jpg";
import bed from "../assets/bed.png";
import pot from "../assets/pot.jpg";

export default {
  data() {
    return {
      options: [
        { name: "Hochbeet", description: "Normalmaß | ca. 100x200", color: 1, img: raisedBed, show: true },
        { name: "Beet", description: "Normalmaß | ca. 100x200", color: 2, img: bed, show: true },
        { name: "Balkon", description: "Blumenkästen & Töpfe", color: 3, img: pot, show: true },
      ],
      optionIsChosen: false,
      show: true,
    };
  },
  methods: {
    setColor(color) {
      if (color) {
        return `GetStarted__main__option-color${color}`;
      } else {
        return "GetStarted__main__option";
      }
    },
    chooseOption(event) {
      const name = event.target.id;
      const elementClassList = event.target.classList;
      const choosenOption = this.options.filter((e) => e.name !== name);
      choosenOption.forEach((e) => {
        e.show = !e.show;
      });

      if (elementClassList.contains("choosen")) {
        elementClassList.remove("choosen");
      } else {
        elementClassList.add("choosen");
      }

      this.optionIsChosen = !this.optionIsChosen;
    },
  },
};
</script>

<style lang="scss">
.list-leave-to {
  transform: translateY(100px);
}

.list-move {
  transition: all 0.3s;
  transition: scale;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.GetStarted {
  height: 100vh;
  position: relative;

  &__header {
    margin: 10% 50px;
    &__title {
      font-size: 62px;
    }
    &__subTitle {
      width: 50%;
      margin: 0 auto;
      font-size: 18px;
    }
  }

  &__success {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);

    * {
      font-size: 36px;
    }
  }

  &__main {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15%;
    &__option {
      height: 150px;
      width: 400px;
      border-radius: 15px;
      text-align: left;
      padding: 20px;
      cursor: pointer;
      transition: all 0.3s;

      &__title,
      &__subTitle,
      &__img {
        pointer-events: none;
      }

      &:hover {
        transform: scale(1.2);
      }

      &-color1 {
        background: palegreen;
      }
      &-color2 {
        background: palevioletred;
      }
      &-color3 {
        background: palegoldenrod;
      }
      &__img {
        width: inherit;
        height: 100%;
        width: auto;
        margin-left: 65%;
        margin-top: -20%;
        border-radius: 100vh;
      }

      &.choosen {
        transform: scale(1.2);
      }
    }
  }
}
</style>
