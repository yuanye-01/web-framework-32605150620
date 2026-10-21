<!-- ============================================================
  MyRight.vue —— 实验 02 子组件：带缓存生命周期的右页签（4.2.1）
  目录：experiments/02-keepalive/
  要点：与 MyLeft 同构；exclude / include 模式下观察它的差别
============================================================ -->
<template>
  <div class="tab-card right">
    <h3>MyRight 组件（被 KeepAlive 包着）</h3>
    <p>count 值为：{{ count }}（切走再切回，看它丢不丢）</p>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyRight',
  data() {
    return { count: 0 }
  },
  mounted() {
    console.log('MyRight组件挂载完了')
  },
  unmounted() {
    console.log('MyRight组件被销毁了')
  },
  activated() {
    console.log('MyRight组件被激活了')
  },
  deactivated() {
    console.log('MyRight组件被缓存了')
  }
}
</script>

<style scoped>
.tab-card {
  border: 1.5px solid var(--accent);
  border-radius: 8px;
  padding: 10px 16px;
  margin-top: 10px;
  background: #f0f1ff;
}
</style>