<template>
  <div class="history">
    <div class="container">
      <h1 :key="content.title">{{ content.title }}</h1>
      <div class="history__content">
        <div class="history__wrapper">
          <p
            class="history__text"
            v-for="(content, key) in content.text"
            :key="`p_${key}`"
            v-html="content"
          ></p>
        </div>
        <figure class="history__author">
          <img
            class="history__author-img"
            :src="require(`../assets/images/${content.author.photo}`)"
            :alt="content.author.name"
          />
          <figcaption class="history__author-name">
            {{ content.author.name }}
          </figcaption>
        </figure>
      </div>
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
<style lang="scss" scoped>
@import "../assets/scss/pages/history.scss";
</style>