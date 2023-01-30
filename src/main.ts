import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/css/base.less'
import router from './router'
import store from './store'
import $http from './service'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
$http
// .request({
//   url: '/get'
// })
// .then((res) => {
//   console.log(res)
// })

app.use(router).use(store).mount('#app')
