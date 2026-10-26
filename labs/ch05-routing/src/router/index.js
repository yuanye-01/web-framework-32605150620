// ============================================================
// router/index.js —— ch05-routing 路由表（全章唯一，逐实验长大）
// 创建：createRouter + createWebHashHistory（hash 模式，地址带 #）
// 挂载：main.js 里 app.use(router) 之后，全项目才有 router-link/router-view
// ============================================================
// 从 vue-router 包里"取工具"：createRouter 造路由器、createWebHashHistory 造 hash 历史
import { createRouter, createWebHashHistory } from 'vue-router'

// 页面组件就是普通 .vue 文件，谁要上路由舞台，谁就要先被 import 进来
import Home from '../views/01-basic/Home.vue'
import About from '../views/01-basic/About.vue'
import NotFound from '../views/02-redirect/NotFound.vue'
import Users from '../views/03-dynamic/Users.vue'
import User from '../views/03-dynamic/User.vue'

const router = createRouter({
  history: createWebHashHistory(),   // 补全：hash 模式的历史记录（调用那个工厂函数，记得加括号）
  routes: [
    // 根路径重定向：打开 / 自动跳 /home（放在最前，第一时间接管）
    // redirect 的值是"要跳去的目标地址字符串"，不是组件！
    { path: '/', redirect: '/home' },   // 补全：根路径 / → 跳去 /home
    // 一条规则 = 一个地址配一个组件：path 是地址、component 是页面
    { path: '/home', component: Home },   // 补全：地址 /home 配 Home 组件
    { path: '/about', component: About },   // 补全：地址 /about 配 About 组件
    // 动态路由：:id 是占位符，一条规则匹配 /user/1、/user/2、/user/9527…
    { path: '/users', component: Users },
    { path: '/user/:id', component: User },   // 补全：参数占位符（冒号开头，名字与取参一致）
    // 404 兕底：通配符必须放最后——从上往下匹配，先到先得（照【讲】抄一遍，体会两个星号）
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }   // 补全：通配符地址（见上方【讲】）
  ]
})

export default router
