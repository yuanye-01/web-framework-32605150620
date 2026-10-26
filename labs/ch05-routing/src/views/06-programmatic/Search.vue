<!-- ============================================================
  Search.vue —— 实验 06 页面：搜索结果页（5.5 query 传参）
  目录：views/06-programmatic/
  要点：$route.query.kw 取问号后面的参数；query 参数刷新不丢
============================================================ -->
<template>
  <div class="page">
    <h2>🔍 搜索结果</h2>
    <!-- 补全：问号后面的参数住在 $route 的哪个集合里？（提示：.query.kw；|| '（空）' 是兜底） -->
    <p>关键词：<b class="big">{{ $route.query.kw || '（空）' }}</b>（来自 <code>$route.query.kw</code>）</p>
    <p class="muted">地址栏 <code>#/search?kw=vue</code>——query 参数明晃晃挂在问号后面，刷新也不丢。</p>
    <router-link to="/program">← 回驾驶舱再传一个</router-link>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.big {
  font-size: 20px;
  color: var(--primary-dark);
}

code {
  background: #f0f1ff;
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
}
</style>
