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