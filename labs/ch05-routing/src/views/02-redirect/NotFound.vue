<!-- ============================================================
  NotFound.vue —— 实验 02 页面：404 兜底页（5.2.3）
  目录：views/02-redirect/
  要点：通配符路由 :pathMatch(.*)* 兜住一切没配置的地址；
        必须放在 routes 数组最后（从上往下匹配，先到先得）
============================================================ -->
<template>
  <div class="page">
    <h2>🧭 404｜页面不存在</h2>
    <p>你访问的地址是：<code>{{ $route.fullPath }}</code></p>
    <p class="muted">路由表里从上往下找不到能匹配的规则，最后落到我这条通配符路由上。</p>
    <router-link to="/home">回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--warn);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

code {
  background: #fdf6e3;
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
}
</style>
