import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";

export const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/:path(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
