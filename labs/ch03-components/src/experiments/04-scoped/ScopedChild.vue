<!-- ScopedChild.vue —— 子组件：也有自己的 .box 类，验证隔离 -->
<template>
  <div class="box">
    子组件 ScopedChild 的 .box（蓝色——没被父组件的绿色样式染到）
  </div>
</template>

<script>
export default {
  name: 'ScopedChild'
}
</script>

<style scoped>
.box {
  border: 2px solid var(--accent);
  border-radius: 8px;
  padding: 10px;
  margin: 8px 0;
}
</style>
