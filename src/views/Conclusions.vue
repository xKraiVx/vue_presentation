<template>
  <div :class="content.name.split('/')[1]">
    <div class="container">
      <h1>{{ content.title }}</h1>
    </div>
  </div>
</template>
<script>
import json from "../data/data.json";
export default {
  data: () => ({}),
  computed: {
    content: function () {
      let slidesContent = json.slides,
        currentRoute = this.$router.currentRoute.value.path,
        currentSledeContent = slidesContent.filter(
          (element) => element.name === currentRoute
        )[0];
      return currentSledeContent;
    },
  },
  methods: {},
};
</script>
