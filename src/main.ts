import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/common/base.css'
import $http from './service'

$http.request({
  url: '/get',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch(error) {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch(error) {
      return error
    }
  }
})

createApp(App).use(router).use(store).mount('#app')
