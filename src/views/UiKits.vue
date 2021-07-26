<template>
  <div class="ui-kits">
    <div class="container">
      <h1 :key="content.title">{{ content.title }}</h1>
      <text-and-image v-for="component in content.texts_and_images" :key="component.title" :income="component" />
    </div>
    <p>И другие: <a href="https://www.codeinwp.com/blog/vue-ui-component-libraries/">UI наборы</a></p>
  </div>
</template>
<script>
import json from "../data/data.json";
import TextAndImage from "../components/TextAndImage.vue";

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
    TextAndImage,
  },
};
</script>
