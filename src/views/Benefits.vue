<template>
  <div :class="content.name.split('/')[1]" :key="content.name">
    <div class="container">
      <h1 :key="content.title">{{ content.title }}</h1>
      <accordion
        v-for="(accordion, key) in content.accordions"
        :open="key === 0"
        :key="`accordion_${key}`"
        :income="accordion"
      />
    </div>
  </div>
</template>
<script>
import json from "../data/data.json";
import Accordion from "../components/Accordion.vue";

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
  components: {
    Accordion,
  },
};
</script>
