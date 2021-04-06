<template>
  <div class="Weather-wrapper">
    <div class="Weather--dayEntry active" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di,</span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <Icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
      <Link to="/" class="Link--black dayEntry--more">
        Mehr
        <Icon name="chevron-forward-outline" />
      </Link>
    </div>
    <div class="Weather--dayEntry" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di,</span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <Icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
      <Link to="/" class="Link--black dayEntry--more">
        Mehr
        <Icon name="chevron-forward-outline" />
      </Link>
    </div>
    <div class="Weather--dayEntry" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di,</span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <Icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
      <Link to="/" class="Link--black dayEntry--more">
        Mehr
        <Icon name="chevron-forward-outline" />
      </Link>
    </div>
    <div class="Weather--dayEntry" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di,</span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <Icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
      <Link to="/" class="Link--black dayEntry--more">
        Mehr
        <Icon name="chevron-forward-outline" />
      </Link>
    </div>
    <div class="Weather--dayEntry" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di,</span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <Icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
      <Link to="/" class="Link--black dayEntry--more">
        Mehr
        <Icon name="chevron-forward-outline" />
      </Link>
    </div>
  </div>
</template>

<script>
import Icon from "../atoms/Icon";
import Link from "../atoms/Link";

export default {
  components: {
    Icon,
    Link,
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    setActive($event, status) {
      const nodeItems = Array.from(document.getElementsByClassName("Weather--dayEntry"));
      nodeItems[0].style.pointerEvents = "none";

      if (status) {
        nodeItems[0].classList.remove("active");
        $event.target.classList.add("active");
      } else {
        $event.target.classList.remove("active");
        nodeItems[0].classList.add("active");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Weather {
  &-wrapper {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    border-radius: 10px;
    max-width: 100%;
    margin: 20px;
    overflow: hidden;
    width: 800px;
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  &--dayEntry {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-top: 20px;
    background-color: white;
    width: 137px;
    transition: background-color ease-out 0.3s;
    transition: width ease-out 0.15s;

    .dayEntry--temp {
      display: flex;
      flex-direction: column;

      span {
        position: absolute;
        bottom: 50px;
      }

      > * {
        margin-bottom: 5px;
      }
    }
    .dayEntry--date {
      display: flex;
      flex-direction: column;
    }

    &-curIcon {
      transform: scale(1.2);
      padding: 10px 0;
      color: gold;
    }

    .Link {
      display: flex;
      align-self: center;
      justify-content: center;
      position: absolute;
      bottom: 20px;

      & .Icon {
        transform: scale(0.8);
      }
    }

    &.active {
      display: grid;
      grid-template-areas:
        "temp date"
        "more date";
      justify-content: initial;
      width: 240px;
      background-color: palevioletred;
      color: #fff;
      cursor: pointer;

      & .Link {
        color: #fff;
      }

      .dayEntry--date {
        grid-area: date;
        align-self: start;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 20px;
        padding-top: 15px;
      }
      .dayEntry--temp {
        grid-area: temp;
        flex-direction: row;
        align-items: center;
        padding-left: 20px;
        justify-content: flex-start;
        align-self: start;

        span {
          position: absolute;
          bottom: initial;
          left: 65px;
        }

        & .Icon {
          transform: scale(1.5);
          padding-right: 10px;
        }
      }
      .dayEntry--more {
        grid-area: more;
        padding-left: 20px;
      }
    }
  }
}
</style>
