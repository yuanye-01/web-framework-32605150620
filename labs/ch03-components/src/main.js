import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalDemo from './experiments/03-register/GlobalDemo.vue'

const app = createApp(App)
app.component('GlobalDemo', GlobalDemo)   // 全局注册（教材 3.3.1）：全项目免 import
app.mount('#app')
