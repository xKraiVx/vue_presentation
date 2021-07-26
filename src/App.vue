<template>
  <main>
    <navigation />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>
<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
