import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import HomeView from "@/views/main/MainView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/autenticar",
    name: "LoginView",
    component: LoginView,
  },

  {
    path: "/",
    name: "MainView",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
