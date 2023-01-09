<template>
  <div class="home-container">
    <div>home组件</div>

    <button @click="handleClick">按钮</button>
  </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';

  // 获取路由对象信息
  const route = useRoute()

  // 获取路由对象
  const router = useRouter()

  const handleClick = () => {
    console.log(route.fullPath)
    console.log(route.path)
    console.log(route.query)
    console.log(router.push)
    console.log(router.back)
  }
</script>

<style lang="scss" scoped>

</style>