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