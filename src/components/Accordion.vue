<template>
  <div v-if="income" class="accordion">
    <h3
      v-if="income.button"
      @click="toggleAccordion($event)"
      class="accordion__btn"
      :class="{ 'is-open': isOpen }"
      v-html="income.button"
    />
    <div
      v-if="income.content"
      class="accordion__content"
      :class="{ 'is-open': isOpen }"
    >
      <blockquote
        v-if="income.content.blockquote"
        v-html="income.content.blockquote"
        class="accordion__content-blockquote"
      />
      <p v-if="income.content.text" v-html="income.content.text" class="accordion__content-text"/>
      <img
        v-if="income.content.image"
        :src="require(`../assets/images/${income.content.image}`)"
        alt="icon"
        class="accordion__content-image"
      />
      <ul v-if="income.content.list" class="accordion__content-list">
        <li
          v-for="item in income.content.list"
          :key="item.title"
          class="accordion__content-list-item"
        >
          <div class="accordion__content-list-item-content">
            <h3 v-if="item.title" v-html="item.title" />
            <p v-if="item.text" v-html="item.text" />
          </div>
          <img
            v-if="item.image"
            :src="require(`../assets/images/${item.image}`)"
            :alt="item.title"
            class="accordion__content-list-item-image"
            :class="{ 'accordion__content-list-item-image--dark': item.dark }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    income: Object,
  },
  data: () => ({
    isOpen: false,
  }),
  mounted() {
    this.isOpen = this.open;
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/components/accordion.scss";
</style>