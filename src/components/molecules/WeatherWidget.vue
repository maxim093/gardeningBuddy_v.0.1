<template>
  <div class="Weather-wrapper">
    <div class="Weather--dayEntry active" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di, </span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <base-icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
    </div>
    <div class="Weather--dayEntry" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di, </span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <base-icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
    </div>
    <div class="Weather--dayEntry" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di, </span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <base-icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
    </div>
    <div class="Weather--dayEntry" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di, </span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <base-icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
    </div>
    <div class="Weather--dayEntry" @mouseover="setActive($event, true)" @mouseleave="setActive($event, false)">
      <div class="dayEntry--date">
        <span>Di, </span>
        <span>21.06.20</span>
      </div>
      <div class="dayEntry--temp">
        <base-icon name="sunny-outline" class="Weather--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "../atoms/BaseIcon";

export default {
  name: "WeatherWidget",
  components: {
    BaseIcon,
  },
  data() {
    return {
      hover: false,
    };
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
    overflow: hidden;
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    position: absolute;
    top: 10px;
    right: 80px;
  }

  &--dayEntry {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: white;
    width: 137px;
    transition: background-color ease-out 0.3s;
    transition: width ease-out 0.15s;
    padding-top: 10px;

    .dayEntry--temp {
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        margin-left: 10px;
      }
    }
    .dayEntry--date {
      display: flex;
      flex-direction: row;
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
