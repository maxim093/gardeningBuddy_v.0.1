<template>
  <div class="Dashboard-Sidebar">
    <ul class="Dashboard-Sidebar-MainNav">
      <li class="Dashboard-Sidebar-entry"><base-icon name="leaf-outline"></base-icon>Dashboard</li>
      <li class="Dashboard-Sidebar-entry"><base-icon name="checkmark-done-outline"></base-icon>Todos</li>
      <!-- <li class="Dashboard-Sidebar-entry"><base-icon name="calendar-outline"></base-icon>Kalender</li> -->
      <!-- <li class="Dashboard-Sidebar-entry"><base-icon name="book-outline"></base-icon>Einträge</li> -->
      <li class="Dashboard-Sidebar-entry"><base-icon name="construct-outline"></base-icon>Tipps & Tricks</li>
      <li class="Dashboard-Sidebar-entry"><base-icon name="person-circle-outline"></base-icon>Mein Konto</li>
      <!-- <li class="Dashboard-Sidebar-entry"><base-icon name="settings-outline"></base-icon>Einstellungen</li> -->
      <!-- <li class="Dashboard-Sidebar-entry"><base-icon name="contrast-outline"></base-icon>Dark/mode</li> -->
      <!-- <li class="Dashboard-Sidebar-entry"><base-icon name="arrow-back-circle-outline"></base-icon>Einklappen</li> -->
    </ul>
  </div>
</template>

<script>
import BaseIcon from "../../atoms/BaseIcon";
export default {
  components: {
    BaseIcon,
  },
};
</script>

<style lang="scss" scoped>
.Dashboard-Sidebar {
  visibility: hidden;
  z-index: 9999;
  position: absolute;
  top: 5%;
  background: #fff;
  border-radius: 0 10px 10px 0;

  &-MainNav {
    list-style: none;
    padding: 20px;
    text-align: left;

    .Dashboard-Sidebar-entry {
      padding: 10px 0;
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
}
</style>
