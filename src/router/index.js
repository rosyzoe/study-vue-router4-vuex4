import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// 配置路由规则
const routes = [
  { path: "/login", component: () => import("../views/login.vue") },
  { path: "/home", component: () => import("../views/home.vue") }
]

// 创建路由
const router = createRouter({
  // 创建hash模式的路由
  history: createWebHashHistory(),

  // 创建history模式的路由
  // history: createWebHistory(),

  // 配置路由规则
  routes
})

// 前置路由守卫
// router.beforeEach()

// 后置路由守卫
// router.afterEach()

// 导出路由实例
export default router