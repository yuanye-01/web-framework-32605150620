<!-- ============================================================
  CenterProfile.vue —— 实验 04 子页面：个人资料（5.3）
  目录：views/04-nested/
  要点：子路由组件，显示在 Center 外壳的 router-view 里
============================================================ -->
<template>
  <div class="sub-page">
    <h3>📄 个人资料（/center/profile）</h3>
    <p>姓名：张三｜求职意向：前端开发工程师</p>
    <p class="muted">我是 Center 的 child，地址 <code>/center/profile</code> 里开头的 <code>/center</code> 部分归外壳管。</p>
  </div>
</template>

<script>
export default {
  name: 'CenterProfile'
}
</script>

<style scoped>
.sub-page {
  border: 1px dashed var(--border);
  border-radius: 8px;
  background: #fffdf5;
  padding: 10px 14px;
}

code {
  background: var(--primary-bg);
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
  font-size: 13px;
}
</style>
