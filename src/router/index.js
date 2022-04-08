import { createWebHistory, createRouter } from "vue-router";
import Index from "@/pages/Index.vue";
import Terms from "@/pages/Terms.vue";
import NotFound from "@/pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
