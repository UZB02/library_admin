import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLayoutVue from '@/layouts/AppLayout.vue'
import AuthLayoutVue from '@/layouts/Auth/AuthLayout.vue'
import axios from "axios";
axios.defaults.baseURL = "https://library-backend-ixau.onrender.com";
// axios.defaults.baseURL = "http://localhost:5001";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: AppLayoutVue,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        layout: AppLayoutVue,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../components/Register/Login.vue"),
      meta: {
        layout: AuthLayoutVue,
      },
    },
  ],
});

export default router
