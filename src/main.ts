import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/css/base.less'
import router from './router'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { setupStore } from '@/store/index'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(store)
setupStore()
app.mount('#app')
