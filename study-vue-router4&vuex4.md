# vue-router4

## 1.安装vue-router4

```js
yarn add vue-router // 现在默认版本就是4
```

## 2.创建router/index.js

```js
import { 
  createRouter, 
  createWebHashHistory, 
  createWebHistory 
} from "vue-router";

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
```

## 3.在man.js中引入

```js
import { createApp } from 'vue'
import App from './App.vue'
//引入路由
import router from './router'

const app = createApp(App)

// 挂载路由
app.use(router)
app.mount('#app')

```

## 4.在App.vue中配置路由出口

```vue
<template>
  <div>
    <!-- 配置路由出口 -->
    <router-view />

    <router-link to="/login">点击去登录页</router-link>
    <div></div>
    <router-link to="/home">点击去主页</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>

```

## 5.通过useRoute可以获取路由信息

```js
<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    console.log(route.path)
    console.log(route.fullPath)
  },
}
</script>
```

## 6.通过useRouter可以获取路由对象

```js
<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const login = () => {
      router.push('/home')
    }
    return {
      login,
    }
  },
}
</script>
```

# Vuex4

## 1.安装vuex4

```js
yarn add vuex // 默认安装的就是vuex4
```

## 2.创建store/index.js

```js
import { createStore } from "vuex";

const store = createStore({
  // 官方推荐的写法
  state() {
    return {
      count: 100
    }
  },
  // 普通写法也支持
  // state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})

// 导出vuex实例
export default store
```

## 3.在组件中使用vuex4

```vue
<!-- 组件 -->
<template>
  <div class="login-container">
    <div>login组件</div>

    <div>当前计数: {{ store.state.count }}</div>
    <button @click="increment">count+1</button>
    <button @click="slowIncrement">count慢慢的+1</button>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';

  const store = useStore()

  const increment = () => {
    store.commit("changeCount")
  }

  const slowIncrement = () => {
    store.dispatch("changeCountAction")
  }

</script>

<style lang="scss" scoped>

</style>
```

```js
// store/index.js
import { createStore } from "vuex";

const store = createStore({
  // 官方推荐的写法
  state() {
    return {
      count: 100
    }
  },
  // 普通写法也支持
  // state: {},
  mutations: {
    changeCount(state) {
      state.count ++
    }
  },
  actions: {
    changeCountAction(context) {
      setTimeout(() => {
        context.commit("changeCount")
      },2000)
    }
  },
  getters: {},
  modules: {}
})

// 导出vuex实例
export default store
```

