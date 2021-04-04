<template>
  <div class="Weather-wrapper">
    <div class="Weather-today">
      <div class="Weather-today--temperature">
        <Icon name="sunny-outline" size="large" color="Icon--white" />
        <span>22 &#176;</span>
      </div>
      <div class="Weather-today--date">
        <span>Montag,</span>
        <span>20.06.20</span>
      </div>
      <Link to="#" class="Weather-today--all Link--white">Ganzer Tag <Icon name="chevron-forward-outline"/></Link>
    </div>
    <div class="Weather-future">
      <div class="Weather-future--dayEntry">
        <span>Di,</span>
        <span>21.06.20</span>
        <Icon name="sunny-outline" class="Weather-future--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
        <Link to="/" class="Link--black">Mehr <Icon name="chevron-forward-outline"/></Link>
      </div>
      <div class="Weather-future--dayEntry">
        <span>Mi,</span>
        <span>22.06.20</span>
        <Icon name="sunny-outline" class="Weather-future--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
        <Link to="/" class="Link--black">Mehr <Icon name="chevron-forward-outline"/></Link>
      </div>
      <div class="Weather-future--dayEntry">
        <span>Do,</span>
        <span>23 &#176;.06.20</span>
        <Icon name="sunny-outline" class="Weather-future--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
        <Link to="/" class="Link--black">Mehr <Icon name="chevron-forward-outline"/></Link>
      </div>
      <div class="Weather-future--dayEntry">
        <span>Fr,</span>
        <span>24.06.20</span>
        <Icon name="sunny-outline" class="Weather-future--dayEntry-curIcon" size="large" color="Icon--black" />
        <span>23 &#176;</span>
        <Link to="/" class="Link--black">Mehr <Icon name="chevron-forward-outline"/></Link>
      </div>
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
};
</script>

<style lang="scss" scoped>
.Weather {
  &-wrapper {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    max-width: 100%;
    margin: 20px;
    overflow: hidden;
    width: 800px;
    height: 200px;
    display: grid;
    grid-template-areas: "today future future";
    grid-template-columns: 0.9fr 2.1fr;
    grid-template-rows: auto;
  }

  &-today {
    grid-area: today;
    background-color: palevioletred;
    color: #fff;
    display: grid;
    grid-template-areas:
      "temp date"
      "all all";
    grid-template-rows: auto;
    position: relative;
    padding: 20px;
    text-align: start;

    &--temperature {
      grid-area: temp;
      display: flex;

      & .Icon {
        transform: scale(1.2);
        padding-right: 10px;
        color: gold;
      }
    }

    &--date {
      grid-area: date;
      text-align: end;
      display: flex;
      flex-direction: column;
    }

    &--all {
      grid-area: all;
      align-self: flex-end;
      align-items: center;
      display: flex;

      & .Icon {
        transform: scale(0.8);
      }
    }
  }

  &-future {
    grid-area: future;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;

    &--dayEntry {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      padding-top: 20px;
      background: white;
      transition: all ease-out 0.3s;

      &:hover {
        background: palevioletred;
        color: #fff;
        cursor: pointer;

        & .Link {
          color: #fff;
        }
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
    }
  }
}
</style>
