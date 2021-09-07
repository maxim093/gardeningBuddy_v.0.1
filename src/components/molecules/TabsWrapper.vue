<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
        :class="{ selected: title == selectedTitle }"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);

    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  margin: 0 auto;
  padding-left: 10px;
}

.tabs__header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.tabs__header li {
  width: 200px;
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s all ease-out;
  box-shadow: 0 1px 0px 5px rgba(0, 0, 0, 0.05);
}

.tabs__header li:last-child {
  margin-right: 5px;
}

.tabs__header li.selected {
  background-color: #0984e3;
  color: #fff;
}
</style>
