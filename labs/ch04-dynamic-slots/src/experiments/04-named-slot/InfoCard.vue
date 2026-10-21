<!-- ============================================================
  InfoCard.vue —— 实验 04 子组件：三孔信息卡（4.3.3）
  目录：experiments/04-named-slot/
  要点：<slot name="xxx"> 具名插槽 + 不写 name 的默认插槽；
        没被 #xxx 指定的内容会落进默认插槽
============================================================ -->
<template>
  <div class="info-card">
    <header class="hole-header">
      <!-- ①号孔：标题区 -->
      <slot name="header"><span>默认标题</span></slot>
    </header>

    <main class="hole-body">
      <!-- ②号孔：正文区（name 缺省 = "default"），也有后备内容 -->
      <slot>
        <p>（正文没填，走后备内容）</p>
      </slot>
    </main>

    <footer class="hole-footer">
      <!-- ③号孔：操作区 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'InfoCard'
}
</script>

<style scoped>
.info-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
  width: 300px;
  overflow: hidden;
}

.hole-header {
  background: var(--primary-bg);
  border-bottom: 1px solid var(--border);
  padding: 10px 16px;
  font-weight: 600;
}

.hole-body {
  padding: 12px 16px;
  min-height: 60px;
}

.hole-footer {
  border-top: 1px dashed var(--border);
  padding: 8px 16px;
  display: flex;
  gap: 8px;
}
</style>