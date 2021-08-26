<template>
  <div class="GetStarted">
    <div class="GetStarted__header">
      <h1 class="GetStarted__header__title">Wähle als erstes dein Beet aus</h1>
      <p class="GetStarted__header__subTitle">
        Bitte wähle anhand deiner Möglichkeiten und Wünsche ein Beet für deinen Garten/Balkon aus. Dies dient nur zum
        schnellen Ersten Start, du kannst danach jederzeit weitere Beete hinzufügen.
      </p>
    </div>

    <div v-if="optionIsChosen" class="GetStarted__success">
      <h2>Großartig! Dann lass uns loslegen😊</h2>
    </div>

    <div class="GetStarted__finish"></div>

    <div class="GetStarted__main">
      <div
        v-for="option in options"
        :key="option.name"
        class="GetStarted__main__option"
        :class="setColor(option.color)"
        @click="chooseOption"
        :id="option.name"
        v-show="option.show === true"
        :ref="setItemRef"
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

import gsap from "gsap";

const timeline = gsap.timeline();

export default {
  mounted() {
    timeline
      .from(".GetStarted__header__title", { y: -50, autoAlpha: 0, duration: 1, stagger: 0.5 })
      .from(".GetStarted__header__subTitle", { y: -50, autoAlpha: 0, duration: 1, stagger: 0.5 })
      .from(".GetStarted__main__option", { y: 50, autoAlpha: 0, duration: 0.5, stagger: 0.5 });
  },
  beforeUpdate() {
    this.itemRefs = [];
  },
  data() {
    return {
      options: [
        { name: "Hochbeet", description: "Normalmaß | ca. 100x200", color: 1, img: raisedBed, show: true },
        { name: "Beet", description: "Normalmaß | ca. 100x200", color: 2, img: bed, show: true },
        { name: "Balkon", description: "Blumenkästen & Töpfe", color: 3, img: pot, show: true },
      ],
      optionIsChosen: false,
      show: true,
      itemRefs: [],
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
      const element = event.target;
      const elementClassList = element.classList;

      let currentElementPos = element.getBoundingClientRect();
      let rightToMidPos = document.body.clientWidth / 2 - currentElementPos.left - 210;
      let leftToMidPos = document.body.clientWidth / 2 - currentElementPos.right - -220;

      if (elementClassList.contains("choosen")) return;

      elementClassList.add("choosen");

      const filterChosen = this.itemRefs.filter((e) => !e.classList.contains("choosen"));

      if (element.classList.contains("GetStarted__main__option-color1")) {
        timeline
          .to(filterChosen, { y: -50, autoAlpha: 0, duration: 0.4, stagger: 0.5 })
          .to(element, { x: rightToMidPos, duration: 0.75 })
          .to("img", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(".GetStarted__main__option__title", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(".GetStarted__main__option__subTitle", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(element, { autoAlpha: 0, duration: 1 })
          .to(".GetStarted__finish", { autoAlpha: 1, height: "100vh", width: "100vw", top: 0, duration: 0.5 }, "-=1")
          .add(() => {
            this.$router.push("/newDashboard");
          });
      } else if (element.classList.contains("GetStarted__main__option-color3")) {
        timeline
          .to(filterChosen, { y: -50, autoAlpha: 0, duration: 1, stagger: 0.5 })
          .to(element, { x: leftToMidPos, duration: 1 })
          .to("img", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(".GetStarted__main__option__title", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(".GetStarted__main__option__subTitle", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(element, { autoAlpha: 0, duration: 1 })
          .to(".GetStarted__finish", { autoAlpha: 1, height: "100vh", width: "100vw", top: 0, duration: 0.5 }, "-=1");
      } else {
        timeline
          .to(filterChosen, { y: -50, autoAlpha: 0, duration: 1, stagger: 0.5 })
          .to("img", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(".GetStarted__main__option__title", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(".GetStarted__main__option__subTitle", { autoAlpha: 0, duration: 0.5 }, "-=0.4")
          .to(element, { autoAlpha: 0, duration: 1 })
          .to(".GetStarted__finish", { autoAlpha: 1, height: "100vh", width: "100vw", top: 0, duration: 0.5 }, "-=1");
      }

      this.optionIsChosen = !this.optionIsChosen;
    },
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el);
      }
    },
  },
};
</script>

<style lang="scss">
.GetStarted {
  height: 100vh;
  position: relative;

  &__header {
    &__title {
      font-size: 62px;
      visibility: hidden;
      margin-top: 0;
      padding-top: 20px;
    }
    &__subTitle {
      width: 50%;
      margin: 0 auto;
      font-size: 18px;
      visibility: hidden;
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

  &__finish {
    height: 150px;
    width: 400px;
    border-radius: 15px;
    padding: 20px;
    background: palegreen;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    visibility: hidden;
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
      visibility: hidden;

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
