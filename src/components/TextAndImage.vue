<template>
  <div v-if="income" class="text-and-image">
    <div class="text-and-image__wrapper">
      <h2 v-if="income.title" v-html="income.title" />
      <p
        v-if="income.text"
        class="text-and-image__text"
        v-html="income.text"
      ></p>
      <accordion :income="income.accordion" />
    </div>
    <a v-if="income.image" :href="income.link" class="text-and-image__image">
      <img
        :src="require(`../assets/images/${income.image}`)"
        :alt="income.title"
      />
    </a>
  </div>
</template>

<script>
import Accordion from "./Accordion.vue";

export default {
  props: {
    income: Object,
  },
  components: {
    Accordion,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/components/text-and-image.scss";
</style>