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
import Center from '../views/04-nested/Center.vue'
import CenterProfile from '../views/04-nested/CenterProfile.vue'
import CenterOrders from '../views/04-nested/CenterOrders.vue'
import NamedDemo from '../views/05-named/NamedDemo.vue'
import ProgramDemo from '../views/06-programmatic/ProgramDemo.vue'
import Search from '../views/06-programmatic/Search.vue'
import Login from '../views/07-guard/Login.vue'

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
    { path: '/user/:id', name: 'user', component: User },   // 补全：参数占位符（冒号开头，名字与取参一致）；命名路由：name 与跳转处一字不差
    { path: '/named', component: NamedDemo },
    // 编程式导航驾驶舱 + query 搜索页
    { path: '/program', component: ProgramDemo },
    { path: '/search', component: Search },
    // 登录页（守卫的拦截目的地）
    { path: '/login', component: Login },
    // 嵌套路由：外壳 + children（子 path 不带开头斜杠，自动拼成 /center/profile）
    {
      path: '/center',        // 外壳自己管 /center 这一级
      component: Center,
      children: [
        // 补全：空路径 '' 重定向到默认子页（目标写完整地址 /center/profile）
        { path: '', redirect: '/center/profile' },
        // 补全：两个子页规则——子 path 记得不带开头的 /，component 对号入座
        { path: 'profile', component: CenterProfile },
        { path: 'orders', component: CenterOrders }
      ]
    },
    // 404 兕底：通配符必须放最后——从上往下匹配，先到先得（照【讲】抄一遍，体会两个星号）
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }   // 补全：通配符地址（见上方【讲】）
  ]
})

// 实验 07：全局前置守卫——/center 是会员区，没 token 一律拦去 /login
// to=去哪 from=从哪来 next=放行函数（每个分支都必须调，忘了就整站卡住）
router.beforeEach((to, from, next) => {
  // 判断条件给了：目标是 /center 本身、或 /center/ 开头的子路由
  if (to.path === '/center' || to.path.startsWith('/center/')) {
    if (localStorage.getItem('token')) {        // 补全：怎么才算"已登录"？（提示：localStorage 里查得到 token）
      next()              // 补全：验明正身，放行（只调函数、不传参数）
    } else {
      next('/login')              // 补全：拦下，改道去登录页（把登录地址传给 next）
    }
  } else {
    next()                // 补全：非会员区，直接放行
  }
})

export default router
