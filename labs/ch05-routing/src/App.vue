<!-- ============================================================
  App.vue —— ch05-routing 第 5 章实验台（路由版）
  上一章的实验台是"锚点菜单"，这一章换成 router-link 导航：
  导航栏 + 唯一出口 <router-view>，地址栏就是实验记录仪。
  注意：router-link/router-view 没有 import、没注册——
  它们是 app.use(router) 之后全局可用的"官方组件"。
============================================================ -->
<template>
  <div id="app">
    <h1>ch05-routing｜第 5 章实验台</h1>
    <p class="muted">第 05 课（5.1—5.6）：路由——地址栏变，组件换，页面不刷新</p>

    <nav class="top-nav">
      <!-- router-link = 会走路由的 <a>：to 写目标地址（别忘引号）；渲染后自动带高亮类 -->
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/users">用户列表</router-link>      <!-- 补全：地址见任务 3 -->
      <router-link to="/center">用户中心</router-link>      <!-- 补全：地址见任务 4 -->
      <router-link to="/named">命名路由</router-link>      <!-- 补全：地址见任务 5 -->
      <router-link to="/program">编程式导航</router-link>    <!-- 补全：地址见任务 6 -->
      <router-link to="/search">搜索</router-link>          <!-- 补全：地址见任务 6 -->
    </nav>

    <!-- $route.fullPath = 当前完整地址——地址栏的"回声"，实验时盯它 -->
    <p class="muted addr">当前地址：<code>{{ $route.fullPath }}</code>｜登录态：<b>{{ $route.path === '/login' || isLogin() ? '已登录' : '未登录' }}</b>（守卫看 token）</p>

    <!-- 补全：唯一的顶层路由出口组件（一对标签）——地址匹配到谁，谁就显示在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // 用方法不用 computed：localStorage 不是响应式数据，computed 没有响应式依赖会被缓存成"旧值"；
    // 方法每次渲染都重查——路由一变页面重渲染，登录态跟着刷新
    isLogin() {
      return !!localStorage.getItem('token')
    }
  }
}
</script>

<style scoped>
.top-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 8px;
}

.top-nav a {
  color: var(--primary-dark);
  text-decoration: none;
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 3px 14px;
  font-size: 14px;
}

.top-nav a:hover {
  background: var(--primary-bg);
}

/* router-link 匹配当前地址时自动带上 router-link-active 类——白送的高亮 */
.top-nav a.router-link-active {
  background: var(--primary);
  color: #fff;
}

.addr {
  font-size: 13px;
}

code {
  background: var(--primary-bg);
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
  margin-top: 0;
}
</style>
