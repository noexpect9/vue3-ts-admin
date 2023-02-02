import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { RootState, StoreType } from './type'
import login from './login/index'

const store = createStore<RootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLoginData')
}

// 增加类型推断
export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store
