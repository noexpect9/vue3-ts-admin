import { createStore } from 'vuex'
import { RootState } from './type'
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

export default store
