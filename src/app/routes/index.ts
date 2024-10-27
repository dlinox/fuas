import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import {
  authMiddleware,
  noAuthMiddleware,
} from "@/app/middleware/auth.middleware";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AuthLayout",
    component: () => import("@/common/ui/layouts/AuthLayout.vue"),
    beforeEnter: noAuthMiddleware,
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/app/modules/auth/views/index.vue"),
      },
    ],
  },

  {
    path: "/a",
    name: "AdminLayout",
    component: () => import("@/common/ui/layouts/AdminLayout.vue"),
    beforeEnter: authMiddleware,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/app/modules/dashboard/views/index.vue"),
      },
      //general-data
      {
        path: "general-data",
        name: "GeneralData",
        component: () => import("@/app/modules/general-data/views/index.vue"),
      },
      //categories
      {
        path: "categories",
        name: "Categories",
        component: () => import("@/app/modules/category/views/index.vue"),
      },

      {
        path: "positions",
        name: "Positions",
        component: () => import("@/app/modules/position/views/index.vue"),
      },

      {
        path: "offices",
        name: "Offices",
        component: () => import("@/app/modules/office/views/index.vue"),
      },
      //worker
      {
        path: "workers",
        name: "Workers",
        component: () => import("@/app/modules/worker/views/index.vue"),
      },

      //user
      {
        path: "users",
        name: "Users",
        component: () => import("@/app/modules/user/views/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
