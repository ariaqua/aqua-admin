import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// elementUI 的 css 与 tailwindcss preflight.css 的样式有冲突
// 优先使用 elementUI 的 样式
// 参考: https://tailwindcss.com/docs/preflight
import './styles/tailwind.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.css'

import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './permission'

const bootstrap = createApp(App)

bootstrap
  .use(ElementPlus)
  .use(router)
  .use(createPinia())
  .component('SvgIcon', SvgIcon)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  bootstrap.component(key, component)
}

bootstrap.mount('#app')
