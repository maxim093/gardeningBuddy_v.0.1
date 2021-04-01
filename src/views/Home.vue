<template>
  <div class="home">
    <components />
  </div>
</template>

<script>
// @ is an alias to /src
import Components from "../showcase/Components";

export default {
  name: "Home",
  components: {
    Components,
  },
};
</script>
