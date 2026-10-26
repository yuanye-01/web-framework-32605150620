<!-- ============================================================
  Center.vue —— 实验 04 页面：用户中心外壳（5.3 嵌套路由）
  目录：views/04-nested/
  要点：外壳自带布局 + 自己的 <router-view>（子路由出口）；
        子路由地址 /center/profile、/center/orders 在外壳里切换
============================================================ -->
<template>
  <div class="page">
    <h2>🧩 用户中心（外壳）</h2>
    <p class="muted">访问 <code>/center/xxx</code> 时我（外壳）不动，我肚子里的 router-view 换子组件——两级路由各管各的出口。</p>

    <nav class="sub-nav">
      <router-link to="/center/profile">个人资料</router-link>
      <router-link to="/center/orders">我的订单</router-link>
    </nav>

    <!-- 补全：子路由出口组件（一对标签）——/center/profile 显示 CenterProfile、/center/orders 显示 CenterOrders -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Center'
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.sub-nav {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.sub-nav a {
  color: var(--primary-dark);
  text-decoration: none;
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 2px 14px;
  font-size: 14px;
}

.sub-nav a.router-link-active {
  background: var(--primary);
  color: #fff;
}

code {
  background: var(--primary-bg);
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
}
</style>
