<template>
  <div class="conclusions">
    <div class="container">
      <h1>{{ content.title }}</h1>
      <p v-if="content.text" v-html="content.text"></p>
      <ul class="list" v-if="content.list">
        <li class="list__item" v-for="(item, key) in content.list" :key="key" v-html="item"/>
      </ul>
      <blockquote class="conclusions__blockquote" v-if="content.blockquote" v-html="content.blockquote"/>
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
<style lang="scss">
@import "../assets/scss/pages/conclusions.scss"
</style>
