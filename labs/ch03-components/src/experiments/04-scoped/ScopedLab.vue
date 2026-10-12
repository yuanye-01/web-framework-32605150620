<!-- ScopedLab.vue —— 实验 04：样式冲突与隔离（3.4）
     父子各有同名类 .box；:deep() 演示穿透控制子组件内部 -->
<template>
  <div class="lab">
    <h2>实验 04｜样式冲突与 scoped（3.4）</h2>
    <p class="muted">F12 检查下面的盒子：标签上带 <b>data-v-xxxx</b> 哈希属性——scoped 给选择器"加锁"。</p>

    <div class="box">
      父组件自己的 .box（绿色）
      <ScopedChild />
    </div>

    <p class="muted">:deep() 穿透：下面这行文字的红色，是<b>父组件 scoped 样式</b>伸进子组件改的。</p>
    <div class="deep-zone">
      <ScopedChild />
    </div>
  </div>
</template>

<script>
import ScopedChild from './ScopedChild.vue'

export default {
  name: 'ScopedLab',
  components: { ScopedChild }
}
</script>

<style scoped>
.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

/* 父子同名类 .box：互不干扰（各自的 data-v 锁） */
.box {
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 10px;
  margin: 8px 0;
}

/* :deep() 深度选择器（教材 3.4.2）：scoped 下穿透影响子组件内部 */
.deep-zone :deep(.box) {
  border: 2px solid #c0392b;
}

.muted {
  color: var(--muted);
}
</style>
