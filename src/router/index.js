import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Introduction",
    component: Home,
  },
  {
    path: "/slide_1",
    name: "History",
    component: () => import(`../views/History.vue`),
  },
  {
    path: "/slide_2",
    name: "MainPurpose",
    component: () => import("../views/MainPurpose.vue"),
  },
  {
    path: "/slide_3",
    name: "ProjectExamples",
    component: () => import("../views/ProjectExamples.vue"),
  },
  {
    path: "/slide_4",
    name: "Benefits",
    component: () => import("../views/Benefits.vue"),
  },
  {
    path: "/slide_5",
    name: "UiKits",
    component: () => import("../views/UiKits.vue"),
  },
  {
    path: "/slide_6",
    name: "Plugins",
    component: () => import("../views/Plugins.vue"),
  },
  {
    path: "/slide_7",
    name: "Cms",
    component: () => import("../views/Cms.vue"),
  },
  {
    path: "/slide_8",
    name: "Learning",
    component: () => import("../views/Learning.vue"),
  },
  {
    path: "/slide_9",
    name: "Society",
    component: () => import("../views/Society.vue"),
  },
  {
    path: "/end",
    name: "Conclusions",
    component: () => import("../views/Conclusions.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
