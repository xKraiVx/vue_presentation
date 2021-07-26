<template>
  <nav class="navigation" id="nav">
    <button v-if="prevEnable" @click="prev" class="arrow arrow--prev"/>
    <router-link
      v-for="(route, idx) in routes"
      :key="route.path"
      :to="route.path"
      >{{ content[idx] }}
    </router-link>
    <button v-if="nextEnable" @click="next" class="arrow arrow--next"/>
  </nav>
</template>

<script>
import json from "../data/data.json";

export default {
  data: () => ({
    routes: [],
    content: json.navigation,
  }),
  created() {
    this.routes = this.$router.options.routes;
  },
  computed: {
    currentRoute: function () {
      return this.$router.currentRoute.value.path;
    },
    nextEnable: function () {
      let currentRouteIdx = this.routes.indexOf(
        this.routes.filter((element) => element.path === this.currentRoute)[0]
      );
      if (currentRouteIdx === this.routes.length - 1) {
        return false;
      }
      return true;
    },
    prevEnable: function () {
      let currentRouteIdx = this.routes.indexOf(
        this.routes.filter((element) => element.path === this.currentRoute)[0]
      );
      if (currentRouteIdx === 0) {
        return false;
      }
      return true;
    },
  },
  mounted() {
    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") {
        this.prev();
      }
      if (e.key === "ArrowRight") {
        this.next();
      }
    });
  },
  methods: {
    next() {
      if (!this.nextEnable){
        return;
      }
      let currentRouteIdx = this.routes.indexOf(
          this.routes.filter((element) => element.path === this.currentRoute)[0]
        ),
        nextRoute = this.routes[currentRouteIdx + 1];
      this.$router.push(nextRoute);
    },
    prev() {
      if (!this.prevEnable){
        return;
      }
      let currentRouteIdx = this.routes.indexOf(
        this.routes.filter((element) => element.path === this.currentRoute)[0]
      );
      let nextRoute = this.routes[currentRouteIdx - 1];
      this.$router.push(nextRoute);
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/components/navigation.scss";
@import "../assets/scss/components/arrow.scss";
</style>