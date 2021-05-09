<template>
  <div class="Dashboard-Sidebar">
    <base-headline class="Dashboard-Sidebar-Headline">Garden Buddy</base-headline>

    <ul class="Dashboard-Sidebar-MainNav">
      <li class="Dashboard-Sidebar-entry"><base-icon name="leaf-outline"></base-icon>Dashboard</li>
      <li class="Dashboard-Sidebar-entry"><base-icon name="checkmark-done-outline"></base-icon>Todos</li>
      <li class="Dashboard-Sidebar-entry"><base-icon name="calendar-outline"></base-icon>Kalender</li>
      <li class="Dashboard-Sidebar-entry"><base-icon name="book-outline"></base-icon>Einträge</li>
      <li class="Dashboard-Sidebar-entry"><base-icon name="construct-outline"></base-icon>Tipps & Tricks</li>
      <li class="Dashboard-Sidebar-entry"><base-icon name="contrast-outline"></base-icon>Dark/mode</li>
      <li class="Dashboard-Sidebar-entry"><base-icon name="arrow-back-circle-outline"></base-icon>Einklappen</li>

      <div class="Dashboard-Sidebar-MeSection">
        <li class="Dashboard-Sidebar-entry"><base-icon name="person-circle-outline"></base-icon>Mein Konto</li>
        <li class="Dashboard-Sidebar-entry"><base-icon name="settings-outline"></base-icon>Einstellungen</li>
      </div>
    </ul>

    <div class="Dashboard-Sidebar-DarkmodeToggle">
      <darkmode-toggle :mode="mode" @toggle="$emit('toggle')" />
    </div>
  </div>
</template>

<script>
import BaseHeadline from "../../atoms/BaseHeadline.vue";
import BaseIcon from "../../atoms/BaseIcon";
import DarkmodeToggle from "../DarkmodeToggle";

export default {
  props: ["mode"],
  components: {
    BaseIcon,
    BaseHeadline,
    DarkmodeToggle,
  },
};
</script>

<style lang="scss" scoped>
.Dashboard-Sidebar {
  position: relative;

  &-Headline {
    text-align: left;
    padding: 0 0 5px 20px;
  }

  &-MainNav {
    list-style: none;
    padding: 20px;
    text-align: left;
    font-size: 18px;

    .Dashboard-Sidebar-entry {
      padding: 15px 0;
      display: flex;
      align-items: center;

      & .Icon {
        margin-right: 5px;
      }

      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }

  &-MeSection {
    padding-top: 50px;
  }
  &-DarkmodeToggle {
    position: absolute;
    bottom: 40px;
    left: 20px;
  }
}
</style>
