<template>
  <div class="home">
    <div class="container">
      <img alt="Vue logo" :src="require(`../assets/images/${content.logo}`)" />
      <h2>{{ content.subtitle }}</h2>
      <h1>{{ content.title }}</h1>
      <accordion :income="content.accordion" />
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
        currentSlideContent = slidesContent.filter(
          (element) => element.name === currentRoute
        )[0];
      return currentSlideContent;
    },
  },
  methods: {},
  components: {
    Accordion,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/pages/home.scss";
</style>